import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface IProperties {
  action: string;
  text: string;
}

@Component({
  selector: 'app-bottom-button-bar',
  templateUrl: './bottom-button-bar.component.html',
  styleUrls: ['./bottom-button-bar.component.scss'],
})
export class BottomButtonBarComponent implements OnInit {
  @Input()
  props!: IProperties;

  @Input() enabled = true;
  @Output() clicked = new EventEmitter();

  route!: string;

  constructor() {}

  ngOnInit(): void {
    this.route = this.props.action;
  }

  onClick() {
    this.clicked.emit();
  }
}
