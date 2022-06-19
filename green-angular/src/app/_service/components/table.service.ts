import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { BaseResponseModel } from 'src/app/models/BaseResponseModel';
import { DataTableModel } from 'src/app/models/components/DataTableForms';
import { IsystemService } from '../Isystem.service';

@Injectable({
  providedIn: 'root'
})
export class TableService {

constructor(private isystem: IsystemService) { }


  getDataForm(){
    return this.isystem.get<BaseResponseModel<DataTableModel[]>>('form').pipe(
      map((response: any) => response.data? response.data: response) 
    );
  }
  
}
