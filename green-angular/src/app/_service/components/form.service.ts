import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseResponseModel } from 'src/app/models/BaseResponseModel';
import { DataTableModel } from 'src/app/models/components/DataTableForms';
import { MailModel } from 'src/app/models/components/MailModel';
import { IsystemService } from '../Isystem.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {

 
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  //formData: DataTableModel = new DataTableModel();
constructor(private isystem: IsystemService) { }
 

addtask(form: DataTableModel,fileToUpload: File,fileToUpload1: File) {
  const params = {
    data: form
  }
  const formData = new FormData();  
  formData.append("name", form.name);
  formData.append("surname", form.surname);
  formData.append("option", form.option);
  formData.append("submission_id", form.submission_id);
  formData.append("email", form.email);
  formData.append("company", form.company);
  formData.append("company_id", form.company_id);
  formData.append("price", form.price);
  formData.append("payee", form.payee);
  formData.append("iban", form.iban);
  formData.append("gift_code", form.gift_code);
  formData.append("image1", fileToUpload, fileToUpload.name);
  formData.append("image2", fileToUpload1, fileToUpload1.name);
  formData.append("time", form.time);
  formData.append("agb", form.agb);
  formData.append("terms", form.terms);
  return this.isystem.post<BaseResponseModel<DataTableModel[]>>('form', formData).pipe(catchError(this.handleError));
}

handleError(error: HttpErrorResponse) {
    return throwError(error);
} 

sendEmail(email: any, fileToUpload: File) { 
  const formData = new FormData();  
  formData.append("ToEmail", email.ToEmail);
  formData.append("Subject", email.Subject);
  formData.append("Body", email.Body);
  formData.append("Attachments", fileToUpload);
  return this.isystem.post<BaseResponseModel<MailModel[]>>('mail/send/', formData,{ headers: this.headers }).pipe(catchError(this.handleError));
}
}
