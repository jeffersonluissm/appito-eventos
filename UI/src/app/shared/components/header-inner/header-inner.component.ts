import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

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

  @Output() back = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  backClick() {
    this.back.emit(true);
  }
}
