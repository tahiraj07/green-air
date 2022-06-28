import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Subject, Subscription } from 'rxjs';
import { map, tap, debounceTime, switchMap } from 'rxjs/operators';
import { BaseResponseModel } from 'src/app/models/BaseResponseModel';
import { DataTableModel } from 'src/app/models/components/DataTableForms';
import { IsystemService } from '../Isystem.service';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  tableData: Subject<Array<DataTableModel>> = new Subject<Array<DataTableModel>>();
  selectedType: BehaviorSubject<string> = new BehaviorSubject<string>('M1');
  private assignmentParams: Subscription;
  
constructor(private isystem: IsystemService) { }


assignments() { 
    this.assignmentParams = combineLatest([  
      this.selectedType 
    ]).pipe(
      debounceTime(500),
      map(([type]) => {
        return { 
          type 
        };
      }),  
      switchMap(params => { 
        return this.getDataForm(params).pipe(tap());
      })
    ).subscribe(data => {
      this.tableData.next(data);
    }); 
}

  getDataForm(params: any){ 
    return this.isystem.get<BaseResponseModel<DataTableModel[]>>('form', params).pipe(
      map((response: any) => response.data? response.data: response) 
    );
  }
  
}
