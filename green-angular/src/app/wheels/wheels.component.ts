import { Component } from '@angular/core'; 
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-wheels',
  templateUrl: './wheels.component.html',
  styleUrls: ['./wheels.component.css']
})
export class WheelsComponent {
  
  
  firstFormGroup = this._formBuilder.group({
    Vorname: [null, [Validators.required]],
    Nachname: [null, [Validators.required]],
    EMail: [null, [Validators.required, Validators.email]], 
    Zahlungsempfnger: [null, [Validators.required]],
    IBAN: [null, [Validators.required]],
    Gutscheincode:[null],
    type: [null],
    payout: [null]
  });
  secondFormGroup = this._formBuilder.group({
    amount: [null, [Validators.required]],
    stock: [null, [Validators.required]]
  });
  thirdFormGroup  = this._formBuilder.group({
    jahre: [null, [Validators.required]],
    check1: [null, [Validators.required]],
    check2: [null, [Validators.required]]
  });

  
  isLinear = false; 
  
  constructor(private _formBuilder: FormBuilder) {}

 

}
