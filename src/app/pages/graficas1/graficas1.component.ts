import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {
  public labels1 = ['Pan', 'Refrescos', 'tacos'];
  public data1 = [10, 5, 40];
  constructor() { }

  ngOnInit() {
  }

}
