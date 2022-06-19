import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

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

  constructor() {
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

  submit() {
  }
}
