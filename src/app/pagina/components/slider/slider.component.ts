import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {'image': '../../../assets/img/casual.jpg"'}, 
    {'image': '../../../assets/img/urbano2.jpg'},
    {'image': '../../../assets/img/casual2.jpg'}
  ];
}
