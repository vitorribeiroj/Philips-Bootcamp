import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  text = 'Vitor Jardim';
  imgUrl = 'https://picsum.photos/200/300'

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome(){
    return this.text;
  }

  escreveu(value: string){
    this.text = value;}

  clicou(){
    this.text = 'Vitor Jardim'
  }
}


