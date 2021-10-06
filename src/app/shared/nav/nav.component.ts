import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [
  ]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  links = ['#100', '#101', '#102'];
  titles = ['home','carrito', 'roducto'];
  activeLink = this.links[1];
  myColor = 'primary';
}
