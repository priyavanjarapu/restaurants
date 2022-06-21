import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-restuarant-list',
  templateUrl: './restuarant-list.component.html',
  styleUrls: ['./restuarant-list.component.scss']
})
export class RestuarantListComponent implements OnInit {

  public restaurants: any[] = [];
  public formControl = new FormControl();
  public imageUrl = environment.apiURL.replace('/public/api', '');
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getRestaurants('');
    this.formControl.valueChanges
      .pipe(
        debounceTime(400)
      )
      .subscribe(text => this.getRestaurants(text));
  }

  getRestaurants(searchText: any) {
    let httpParams = new HttpParams();
    if (searchText) {
      httpParams = httpParams.append('title', searchText);
    }

    this.httpClient.get(environment.apiURL + '/restaurants')
      .subscribe((response: any) => {
        console.log(response);
        if (response.data && response.data.length) {
          this.restaurants = response.data.slice() || [];
        }

        console.log(this.restaurants);
      });
  }
}
