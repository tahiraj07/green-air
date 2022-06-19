import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, map, takeUntil, tap } from 'rxjs/operators';
import { DataTableModel } from 'src/app/models/components/DataTableForms';
import { TableService } from 'src/app/_service/components/table.service';  

@Component({
  selector: 'app-main_table',
  templateUrl: './main_table.component.html',
  styleUrls: ['./main_table.component.scss']
})
export class Main_tableComponent implements OnInit {

  searchText = new FormControl('');
  searching = false;
  private sub: Subscription;
  requestedShifts: any[];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  private _unsubscribe = new Subject<void>();

  dataSource = new MatTableDataSource<any>([]);
  dataSource$: Observable<MatTableDataSource<DataTableModel>>;

  displayColumns = [];
  displayColumns$: Observable<string[]>;
  normalDisplayColumns = [
    'option',
    'name',
    'surname',
    'email',
    'company',
    'c_id',
    'price',
    'payee',
    'iban',
    'gift_code',
    'img1',
    'img2',
    'time',
    'date',
    'agb',
    'terms',
    'class',
    'price_tag',
    'uniqueid'
  ];
  mediumnDisplayColumns = [
    'name',
    'surname'
  ];
  smallDisplayColumns = [
    'name',
  ];
  
  constructor(private tbservice: TableService,
              private mediaObserver: MediaObserver,)
   { }

  values: any;


  ngOnInit() {
    this.getFormData();
    this.displayColumns$ = this.mediaObserver.asObservable().pipe(
      map(() => {
        if (this.mediaObserver.isActive('lt-sm')) {
          return this.smallDisplayColumns;
        } else if (this.mediaObserver.isActive('lt-lg')) {
          return this.mediumnDisplayColumns;
        } else {
          return this.normalDisplayColumns;
        }
      })
    );
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  getFormData() {
    this.sub = this.tbservice.getDataForm().subscribe(data => {
      this.requestedShifts = data; 
      this.dataSource = new MatTableDataSource<DataTableModel[]>(data);
      this.dataSource.paginator = this.paginator;
      //this.sort.sort({ id: 'id', start: 'asc' } as MatSortable);
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = this.customFilter();
    });
  }

  trackById(index: number, item: DataTableModel) {
    return item.submission_id;
  }

  customFilter() {
    return function (data: any, filter: string) {
      const filters = filter.split(' ').map(item => new RegExp(item, 'ig'));
      if (data.length > 0) {
        const objValues = Object.values(data).join('');
        return filters.every(filterString => filterString.test(objValues));
      } else {
        return RegExp(filter.toLowerCase()).test(data.searchString);
      }
    };
  }
  
  // private createTableData(data: DataTableModel[]) {
  //   const dataSource = new MatTableDataSource<DataTableModel>(data);
  //   dataSource.paginator = this.paginator;
  //   this.sort.sort({ id: 'name', start: 'asc' } as MatSortable);
  //   dataSource.sort = this.sort;
  //   dataSource.filterPredicate = this.customFilter();
  //   return dataSource;
  // }

}
