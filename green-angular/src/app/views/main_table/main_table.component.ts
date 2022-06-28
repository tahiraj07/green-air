import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, map, takeUntil, tap } from 'rxjs/operators';
import { DataTableModel } from 'src/app/models/components/DataTableForms';
import { TableService } from 'src/app/_service/components/table.service';
import { Form_detailsComponent } from './form_details/form_details.component';

@Component({
  selector: 'app-main_table',
  templateUrl: './main_table.component.html',
  styleUrls: ['./main_table.component.scss'],
})
export class Main_tableComponent implements OnInit {
  searchText = new FormControl('');
  searching = false;
  private sub: Subscription;
  requestedShifts: DataTableModel[] = [];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  private _unsubscribe = new Subject<void>();

  dataSource = new MatTableDataSource<DataTableModel>([]); 

  displayColumns = [];
  displayColumns$: Observable<string[]>;
  normalDisplayColumns = [
    'option',
    'submission_id',
    'name',
    'surname',
    'email',
    'company',
    'company_id',
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
    'class_v',
    'price_tag',
    'unique_id',
  ];
  mediumnDisplayColumns = ['name', 'surname'];
  smallDisplayColumns = ['name'];

  constructor(
    private tbservice: TableService,
    private mediaObserver: MediaObserver,
    private dialog: MatDialog
  ) {
    this.searchText.valueChanges.pipe(debounceTime(1000)).subscribe((text) => {
      this.applyFilter(text);
    });
  }
  carType: string;
  values: any;

  ngOnInit() {
    this.getFormData("M1");
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

  applyFilter(filterString: string) {
    this.dataSource.filter = filterString;
  }

  getFormData(value: string) {
    const params = {
      Section: value
    }
    this.sub = this.tbservice.getDataForm(params).subscribe((data) => {
      this.requestedShifts = data;
      console.log(data);
      this.dataSource = new MatTableDataSource<DataTableModel>(data);
      this.dataSource.paginator = this.paginator;
      this.sort.sort({ id: 'company_id', start: 'asc' } as MatSortable);
      this.dataSource.sort = this.sort; 
      this.searchText.setValue('');
    });
  }

  trackById(index: number, item: DataTableModel) {
    return item.submission_id;
  }
 
  onRowClicked(row: DataTableModel) {  
      this.dialog.open(Form_detailsComponent, {
        width: '855px',
        data: row
      }).afterClosed().subscribe(differences => {
        // if (differences) {
        //   this.getUsersData();
        // }
      }); 
  }

  typeChange(type:any) {
    this.selectedType.next(type);
  }

  get selectedType() {
    return this.tbservice.selectedType;
  }
 
}
