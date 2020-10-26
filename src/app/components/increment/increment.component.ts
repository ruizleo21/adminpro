import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('valor') public progreso = 40;
  @Input() btnClass = 'btn btn-primary';
  // tslint:disable-next-line: no-output-rename
  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  cambiarValor(valor: number) {
    this.progreso += valor;
    if ( this.progreso >= 100 && valor >= 0 ) {
      this.progreso = 100;
    } else if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
    }
    this.valorSalida.emit(this.progreso);
  }

  onChange(valor: number) {
    console.log(valor);
    if ( valor > 100 ) {
      this.progreso = 100;
    } else if (valor < 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = valor;
    }
    console.log(this.progreso);
    this.valorSalida.emit(this.progreso);
  }

}
