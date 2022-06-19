import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataTableModel } from 'src/app/models/components/DataTableForms';
import { FormService } from 'src/app/_service/components/form.service'; 
import { NotificationsService } from 'src/app/_service/notifications.service';

@Component({
  selector: 'app-main_form',
  templateUrl: './main_form.component.html',
  styleUrls: ['./main_form.component.css'],
})
export class Main_formComponent {
  
  @Input() form: DataTableModel;

  firstFormGroup = this._formBuilder.group({
    submission_id: [null, [Validators.required]],
    name: [null, [Validators.required]],
    surname: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    payee: [null, [Validators.required]],
    iban: [null, [Validators.required]],
    gift_code: [null],
    company: [null],
    c_id: [null],
    option: [null],
    price: [null],
  });
  secondFormGroup = this._formBuilder.group({
    img1: [null, [Validators.required]],
    img2: [null, [Validators.required]],
  });
  thirdFormGroup = this._formBuilder.group({
    time: [null, [Validators.required]],
    agb: [null, [Validators.required]],
    terms: [null, [Validators.required]],
  });

  isLinear = false;

  constructor(private _formBuilder: FormBuilder,
              private alertify: NotificationsService,
              private formservice: FormService) {}

  addForm() {
    const basic = this.firstFormGroup.getRawValue();
    const img = this.secondFormGroup.getRawValue();
    const years = this.thirdFormGroup.getRawValue();

    const allClientData = {
      ...basic,
      ...img,
      ...years
    };

    this.formservice.addtask(allClientData)
      .subscribe(
        () => {
          this.alertify.success('Task added!'); 
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
