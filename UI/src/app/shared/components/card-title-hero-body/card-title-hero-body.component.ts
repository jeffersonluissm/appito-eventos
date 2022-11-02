import { Component, Input, OnInit } from '@angular/core';

interface IProperties {
  body: string;
  image: string;
  title: string;
}

@Component({
  selector: 'app-card-title-hero-body',
  templateUrl: './card-title-hero-body.component.html',
  styleUrls: ['./card-title-hero-body.component.scss'],
})
export class CardTitleHeroBodyComponent implements OnInit {
  @Input()
  props!: IProperties;

  constructor() {}

  ngOnInit(): void {}
}
