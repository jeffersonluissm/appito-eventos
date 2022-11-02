import { Component, Input, OnInit } from '@angular/core';

interface IProperties {
  title: string;
  body: string;
}

@Component({
  selector: 'app-title-body',
  templateUrl: './title-body.component.html',
  styleUrls: ['./title-body.component.scss'],
})
export class TitleBodyComponent implements OnInit {
  @Input()
  props!: IProperties;

  constructor() {}

  ngOnInit(): void {}
}
