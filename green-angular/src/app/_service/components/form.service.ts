import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseResponseModel } from 'src/app/models/BaseResponseModel';
import { DataTableModel } from 'src/app/models/components/DataTableForms';
import { IsystemService } from '../Isystem.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  formData: DataTableModel = new DataTableModel();
constructor(private isystem: IsystemService) { }
 

addtask(form: DataTableModel) {
  const params = {
    data: form
  }
  return this.isystem.post<BaseResponseModel<DataTableModel[]>>('form', form).pipe(
    map((response: any) => response.data? response.data: response),
    catchError(error => of([console.log(error.message)]))
  );
}
}
