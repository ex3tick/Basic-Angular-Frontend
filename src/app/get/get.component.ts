import { Component, OnInit } from '@angular/core';
import {SuperHeroService} from '../Services/tutorial.service';
import {SuperHero} from '../Entitys/Entitys';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit{
  superHero: SuperHero [] = [];
constructor(private superHeroService: SuperHeroService) {
}

  ngOnInit(): void {
  this.superHeroService.GetSuperHero().subscribe({
    next: (response) => {
      this.superHero = response;
    },
    error: (error) => {
      console.log('Fehler:', error);
    },
    complete: () => {
      console.log('Hat geklappt');
    }
  });
  }


}
