import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { DataTableModel } from 'src/app/models/components/DataTableForms';
import { MailModel } from 'src/app/models/components/MailModel';
import { FormService } from 'src/app/_service/components/form.service';
import { NotificationsService } from 'src/app/_service/notifications.service';

@Component({
  selector: 'app-main_form',
  templateUrl: './main_form.component.html',
  styleUrls: ['./main_form.component.css'],
})
export class Main_formComponent {
  @Input() form: DataTableModel[];
  uploader: FileUploader;
  hasBaseDropZoneOver = false;

  forms: FormGroup;
  IBANPattern = '^DEd{20}$';
  firstFormGroup = this._formBuilder.group({
    submission_id: [null, [Validators.required]],
    name: [null, [Validators.required]],
    surname: [null, [Validators.required]],
    email: [null, [Validators.required]],
    payee: [null, [Validators.required]],
    iban: [null, [Validators.required, Validators.pattern('^DE[0-9]{20}$')]],
    gift_code: [null],
    company: [null],
    c_id: [null],
    option: [null],
    price: [null],
  });
  secondFormGroup = this._formBuilder.group({
    image1: [null, [Validators.required]],
    image2: [null, [Validators.required]],
  });
  thirdFormGroup = this._formBuilder.group({
    time: [null, [Validators.required]],
    agb: [null, [Validators.required]],
    terms: [null, [Validators.required]],
  });

  isLinear = true;
  file = null;
  fileName: string;
  fileToUpload: File | null = null;
  fileToUpload1: File | null = null;

  constructor(
    private _formBuilder: FormBuilder,
    private alertify: NotificationsService,
    private formservice: FormService
  ) {}

  ngOnInit() { 
  }


  addForm() {
    const basic = this.firstFormGroup.getRawValue();
    const img = this.secondFormGroup.getRawValue();
    const years = this.thirdFormGroup.getRawValue();

    const allClientData = {
      ...basic,
      ...img,
      ...years
    };

    this.formservice.addtask(allClientData, this.fileToUpload!, this.fileToUpload1!).subscribe(
      (resp) => {
        this.alertify.success('Form added!');
        console.log(resp);
    },
    (error) => {
        console.log(error.error);
    } 
    );
  }

handleFileInput(files: FileList) {
  this.fileToUpload = files.item(0);
}
handleFileInput1(files: FileList) {
  this.fileToUpload1 = files.item(0);
}

sendEmail() { 
  const mailForm = {
    ToEmail: this.firstFormGroup.value.email,
    Subject: "KLIMA QUOTE",
    Body: "Hello, this is a test" 
  }
  console.log(mailForm);
  this.formservice.sendEmail(this.firstFormGroup.value.email, this.fileToUpload1!).subscribe(
    (resp) => {
      this.alertify.success('Email send!');
      console.log(resp);
  },
  (error) => {
      console.log(error.error);
  } 
  );
} 
  
  // initializeUploader() {
  //   this.uploader = new FileUploader({
  //     isHTML5: true,
  //     allowedFileType: ['image'],
  //     removeAfterUpload: true,
  //     autoUpload: false,
  //     maxFileSize: 10 * 1024 * 1024,
  //   });

  //   this.uploader.onAfterAddingFile = (file) => {
  //     file.withCredentials = false;
  //   };

  //   this.uploader.onSuccessItem = (item, response, status, headers) => {
  //     if (response) {
  //       const res: DataTableModel = JSON.parse(response);
  //       const photo = {
  //         url: res.url,
  //         image1: res.image1,
  //         image2: res.image2,
  //       };
  //       this.form.push(photo);
  //     }
  //   };
  // }
}
