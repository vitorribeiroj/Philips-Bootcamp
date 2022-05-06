import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrls: ['./pipes-examples.component.css']
})
export class PipesExamplesComponent implements OnInit {
  number = 0;
  text = 'hello World!';
  date = new Date;
  pessoa = {
    nome: 'Vitor',
    idade: 32,
    profissao: 'Militar'
  }
  arrayStr = [
    'Vitor', 'Ribeiro', 'Jardim'
  ]

  nomes = ['Ivonaldo', 'ana', 'maria'];

  nomesPromisse: any;
  nomes$: any;
  
  constructor(private upperCasePipe: UpperCasePipe) { }

  ngOnInit(): void {
    this.text = this.upperCasePipe.transform(this.text)
  }

  mudaValor() {
    this.text = 'novo texto';
  }

  add(text: string) {
    this.nomes.push(text);
  }

  addToPromisse(text: string) {
    this.nomes.push(text);
    this.nomesPromisse = new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.nomes), 2000)
    })
  }

  addToObservable(text: string) {
    this.nomes.push(text);
    this.nomes$ = interval(2000).pipe(map(valor => this.nomes));
  }

}
