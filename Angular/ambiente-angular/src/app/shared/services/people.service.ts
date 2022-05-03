import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any>{
    let peopleArray = [{
      firstName: 'Vitor',
      lastName: 'Jardim',
      age: 32
    },
    {
      firstName: "Mariana",
      lastName: "Mendes",
      age: 29
    },
    {
      firstName: "Sara",
      lastName: "Mendes Jardim",
      age: 1
    }
  ]
    return of(peopleArray);
  }
}
