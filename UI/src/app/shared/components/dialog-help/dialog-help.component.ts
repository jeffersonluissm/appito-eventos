import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-help',
  templateUrl: './dialog-help.component.html',
  styleUrls: ['./dialog-help.component.scss'],
})
export class DialogHelpComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogHelpComponent>) {}

  ngOnInit(): void {}

  onNoClick() {
    this.dialogRef.close();
  }

  okClick() {
    window.open('https://wa.me/551130133130', '_blank');
    this.dialogRef.close();
  }
}
