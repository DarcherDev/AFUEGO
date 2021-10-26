import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {'image': '../../../assets/img/casual.jpg"'}, 
    {'image': '../../../assets/img/urbano2.jpg'},
    {'image': '../../../assets/img/casual2.jpg'}
  ];

}
