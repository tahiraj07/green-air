import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataTableModel } from 'src/app/models/components/DataTableForms';

@Component({
  selector: 'app-form_details',
  templateUrl: './form_details.component.html',
  styleUrls: ['./form_details.component.scss']
})
export class Form_detailsComponent implements OnInit {

  local_data: any; 
  active: boolean;
  editForm: FormGroup;
  @Output() refresh = new EventEmitter<void>();
  constructor( 
    private dialogRef: MatDialogRef<Form_detailsComponent>,
    @Inject(MAT_DIALOG_DATA) public formData: DataTableModel) {
    this.local_data = { ...formData };
  }
  ngOnInit() {
    this.active = true;
    this.editForm.disable();
  }

}
