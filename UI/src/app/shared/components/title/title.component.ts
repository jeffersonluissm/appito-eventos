import { Component, Input, OnInit } from '@angular/core';

interface IProperties {
  title: string;
}

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input()
  props!: IProperties;

  constructor() {}

  ngOnInit(): void {}
}
