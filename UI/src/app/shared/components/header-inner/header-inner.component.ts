import { DialogHelpComponent } from './../dialog-help/dialog-help.component';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html',
  styleUrls: ['./header-inner.component.scss'],
})
export class HeaderInnerComponent implements OnInit, OnChanges {
  @Input()
  title!: string;

  @Input()
  loader = false;

  @Input() showClose = false;

  @Output() back = new EventEmitter<boolean>();
  @Output() close = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  backClick() {
    this.back.emit(true);
  }

  closeClick() {
    this.close.emit(true);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogHelpComponent, {
      width: '312px',
      panelClass: 'dialog-help',
    });
  }
}
