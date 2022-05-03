import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  count = 0;
  text!: string;
  pessoas = [{
    firstName: '',
    lastName: '',
    age: 0
  }];

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
    console.log(this.pessoas)
    this.getPeople();
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

  getPeople(){
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    })
  }


}
