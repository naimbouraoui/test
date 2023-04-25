import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm = new FormGroup({
    myInput: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  onSubmit() {
    console.log(this.myForm.value);
  }
  product!:Product;

  constructor() { }

  ngOnInit(): void {
    this.product=new Product();
  }

}
