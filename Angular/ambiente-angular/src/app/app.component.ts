import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  count = 0;
  text!: string;
  pessoas = [
    {
      nome: "Vitor",
      sobrenome: "Jardim"
    },
    {
      nome: "Mariana",
      sobrenome: "Mendes"
    },
    {
      nome: "Sara",
      sobrenome: "Mendes Jardim"
    }
  ];

  constructor() {
  }

  ngOnInit() {
    console.log(this.pessoas)
    let interval = setInterval(() => {
      this.count++;
      if (this.count === 10) {
        clearInterval(interval);
      }
    }, 800)

  }

  clicou(): void {
    console.log('Clicou em mim')
  }


}
