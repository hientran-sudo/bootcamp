import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {
  userDetails! : FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.userDetails = new FormGroup({
      firstName: new FormControl(null,[Validators.required,Validators.minLength(2)]),
      lastName: new FormControl(null,Validators.required),
      email: new FormControl(null,Validators.required),
      department: new FormControl(null,Validators.required),
      prizes : new FormArray([
        new FormControl(null),
        new FormControl(null),
      ])
    })
  }
  onSubmit (){
    console.log(this.userDetails.value);
  }
  get firstName(){
    return this.userDetails.get('firstName')!;
  }
  get email(){
    return this.userDetails.get('email')!;
  }
  get department(){
    return this.userDetails.get('department')!;
  }
  get allPrizes(){
    return this.userDetails.get('prizes')! as FormArray;
  }
}
