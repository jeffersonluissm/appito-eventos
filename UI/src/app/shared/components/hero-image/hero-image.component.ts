import { Component, Input, OnInit } from '@angular/core';

interface IProperties {
  image: string;
}

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.scss'],
})
export class HeroImageComponent implements OnInit {
  @Input()
  props!: IProperties;

  constructor() {}

  ngOnInit(): void {
    if (!this.props.image) {
      this.props.image = '../../assets/images/hero-image.png';
    }
  }
}
