import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-popup',
  templateUrl: './error-popup.component.html',
  styleUrls: ['./error-popup.component.css']
})
export class ErrorPopupComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {path: string, message: string},
    public dialogRef: MatDialogRef<ErrorPopupComponent>
  ) { }

  ngOnInit() {
  }

}
