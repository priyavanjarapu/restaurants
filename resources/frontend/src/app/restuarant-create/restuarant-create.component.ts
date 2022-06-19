import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
    food_items: new FormControl([], Validators.required)
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  submit() {}
}
