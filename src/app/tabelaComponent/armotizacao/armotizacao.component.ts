import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-armotizacao',
  templateUrl: './armotizacao.component.html',
  styleUrls: ['./armotizacao.component.css'],
})
export class ArmotizacaoComponent implements OnInit {
  c: number = 100;
  i: number = 0.2;
  t: number = 8;

  constructor() {}

  ngOnInit() {}

  getSplit() {
    return (this.c * this.i) / (1 - 1 / Math.pow(1 + this.i, this.t));
  }

  getPeriodo() {
    var periods = [];
    for (var i = 1; i <= this.t; i++) {
      periods.push(i);
    }
    return periods;
  }

  getInteresse(n: number) {
    var value = this.c;
    for (var i = 0; i < n; i++) {
      value = value + value * this.i - this.getSplit();
    }
    return value * this.i;
  }

  getAmortizacao(n: number) {
    var value = this.c;
    for (var i = 0; i < n; i++) {
      value = value + value * this.i - this.getSplit();
    }
    return this.getSplit() - value * this.i;
  }

  getBalanceamento(n: number) {
    var value = this.c;
    for (var i = 0; i < n; i++) {
      value = value + value * this.i - this.getSplit();
    }
    return value;
  }
}
