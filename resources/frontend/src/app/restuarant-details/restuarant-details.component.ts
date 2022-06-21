import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-restuarant-details',
  templateUrl: './restuarant-details.component.html',
  styleUrls: ['./restuarant-details.component.scss']
})
export class RestuarantDetailsComponent implements OnInit {

  public details: any = {};
  public imgUrl = environment.apiURL.replace('/public/api', '');
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => this.getDetails(params['id']));
  }

  ngOnInit(): void {
  }

  getDetails(id: string) {
    this.httpClient.get(`${environment.apiURL}/restaurants/${id}`)
      .subscribe((response: any) => {
        console.log(response);
        this.details = response.data;
      });
  }
}
