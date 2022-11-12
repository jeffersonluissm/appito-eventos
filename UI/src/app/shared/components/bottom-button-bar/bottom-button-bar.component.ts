import { Component, Input, OnInit } from '@angular/core';

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

  route!: string;

  constructor() {}

  ngOnInit(): void {
    this.route = this.props.action;
  }
}
