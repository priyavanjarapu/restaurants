import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-restuarant-create',
  templateUrl: './restuarant-create.component.html',
  styleUrls: ['./restuarant-create.component.scss']
})
export class RestuarantCreateComponent implements OnInit {

  public form = new FormGroup({
    image: new FormControl(null, Validators.required),
    title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    location: new FormControl(null, Validators.required),
    rating: new FormControl(null, Validators.required),
    food_items: new FormArray([])
  });

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar
  ) {
    this.addFood();
  }

  addFood() {
    const formArray = this.form.get('food_items') as FormArray;
    formArray.push(new FormGroup({
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required)
    }));
  }

  removeFood(index: number) {
    (this.form.get('food_items') as FormArray).removeAt(index);
  }

  ngOnInit(): void {
  }

  public get foodItems(): FormGroup[] {
    return (this.form.get('food_items') as FormArray).controls as FormGroup[];
  }

  readFile(event: any) {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
      this.httpClient.post(`${environment.apiURL}/restaurants/image`, formData)
        .subscribe((response: any) => {
          this.form.patchValue({image: response.data});
        }, (error: any) => {
          console.error(error);
        });
    }
  }

  submit() {
    if (this.form.invalid) {
      console.log(this.form);
      return;
    }
    const formData = this.form.value;
    formData.food_items = JSON.stringify(formData.food_items);
    this.httpClient.post(`${environment.apiURL}/restaurants`, formData)
      .subscribe((response: any) => {
        console.log(response);
        this.snackBar.open(`Restaurant Created Successfully`, '', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      }, (error: any) => {
        console.error(error);
        this.snackBar.open(`Something went wrong, please try again`, '', {duration: 3000, verticalPosition: 'top'});
      });
  }
}
