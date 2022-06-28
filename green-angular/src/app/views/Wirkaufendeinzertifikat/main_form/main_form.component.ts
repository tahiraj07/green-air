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
    name: [null, [Validators.required]],
    surname: [null, [Validators.required]],
    email: [null, [Validators.required]],
    payee: [null, [Validators.required]],
    iban: [null, [Validators.required, Validators.pattern('^DE[0-9]{20}$')]],
    gift_code: [null],
    company: [null],
    company_id: [null],
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

  msgBody: any;
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
  this.msgBody += `<html>
<head></head>
  <body>Guten Tag,
<br><br>
vielen Dank für deine Registrierung und das uns entgegengebrachte Vertrauen bei wirkaufendeinzertifikat.de! Mit dieser E-Mail bestätigen wir deine Anmeldung zur Teilnahme am THG-Quotenhandel. Wir prüfen nun deine Angaben und melden berechtigte E-Fahrzeuge dem Umweltbundesamt (UBA).
<br><br>
Sofern du dich für die Auszahlungsoption "Fest-Betrag" entschieden hast, kontaktieren wir dich nach erfolgreicher Prüfung per Mail mit allen weiteren Schritten. Wir überweisen Dir umgehend den Betrag und gehen für Dich in Vorkasse.
<br><br>
Solltest du den “Flex-Betrag” ausgewählt haben, kontaktieren wir dich in den nächsten 12 Wochen, zeigen dir transparent die erzielten Erlöse auf und zahlen dir die Prämie aus.
<br><br>
Eine Zusammenfassung deiner Angaben findest du hier:

<br><br>
<table style="padding:10px;border:1px solid black;font-size:16px" border = "1">
  <tr>
    <th>Vorname</th>
    <th>${this.firstFormGroup.value.name}</th> 
  </tr>
  <tr>
    <th>Nachname</th>
    <th>${this.firstFormGroup.value.surname}</th> 
  </tr>
  <tr>
    <th>Email</th>
    <th>${this.firstFormGroup.value.email}</th> 
  </tr>
  <tr>
    <th>Bonusauswahl</th>
    <th>${this.firstFormGroup.value.price}</th> 
  </tr>
  <tr>
    <th>Abtretungsdauer</th>
    <th>${this.thirdFormGroup.value.time}</th> 
  </tr>
  <tr>
    <th>Empfanger</th>
    <th>${this.firstFormGroup.value.payee}</th> 
  </tr>
  <tr>
    <th>IBAN</th>
    <th>${this.firstFormGroup.value.iban}</th> 
  </tr>
</table>
<br><br>
 
Bei Fragen kannst du dich gerne jederzeit bei uns melden!
<br><br>
Viele Grüße dein Team von wirkaufendeinzertifikat.de </body>
</html>`;
  const mailForm = {
    ToEmail: this.firstFormGroup.value.email,
    Subject: "New message from Wirkaufendeinzertifikat",
    Body: this.msgBody 
  }
   
  console.log(mailForm);
  this.formservice.sendEmail(mailForm, this.fileToUpload1!).subscribe(
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
