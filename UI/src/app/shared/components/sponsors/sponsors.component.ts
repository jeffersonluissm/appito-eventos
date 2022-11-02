import { Component, Input, OnInit } from '@angular/core';

interface IProperties {
  category: string;
  images: string[];
}

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss'],
})
export class SponsorsComponent implements OnInit {
  @Input()
  props!: IProperties;

  @Input() level: number = 1;

  constructor() {}

  ngOnInit(): void {}
}
