import { Component, Input, OnInit } from '@angular/core';

interface IProperties {
  dates: string[];
  description: string;
  title: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  props!: IProperties;

  constructor() {}

  ngOnInit(): void {}
}
