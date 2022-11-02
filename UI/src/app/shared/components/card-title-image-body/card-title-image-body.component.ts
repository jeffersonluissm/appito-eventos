import { Component, Input, OnInit } from '@angular/core';

interface IProperties {
  body: string;
  image: string;
  title: string;
}

@Component({
  selector: 'app-card-title-image-body',
  templateUrl: './card-title-image-body.component.html',
  styleUrls: ['./card-title-image-body.component.scss'],
})
export class CardTitleImageBodyComponent implements OnInit {
  @Input()
  props!: IProperties;

  constructor() {}

  ngOnInit(): void {
    if (!this.props.image) {
      this.props.image = '../../assets/images/placeholder-user.png';
    }
  }
}
