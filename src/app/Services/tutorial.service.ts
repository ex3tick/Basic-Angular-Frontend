import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SuperPower, SuperHero} from '../Entitys/Entitys';
export const superHeroUrl ='https://localhost:5000/SuperHero'
export const superPowerurl = 'https://localhost:5000/SuperPower'




@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  constructor(private http: HttpClient) {
  }
  GetSuperHero(){
    return this.http.get<SuperHero[]>(superHeroUrl);
  }


  PostSuperHero(superHeroName: string, superHeroAge: number){
    const superHeroData ={
      superHeroName: superHeroName,
      superHeroAge: superHeroName
    };
    return this.http.post(superHeroUrl, superHeroData);

  }
  PutSuperHero(superHeroId: number, superHeroName: string, superHeroAge: number){
    const superHeroIdUrl = `${superHeroUrl}?id=${superHeroId}`;
    const superHeroData ={
      superHeroName: superHeroName,
      superHeroAge: superHeroName
    };
    return this.http.put(superHeroIdUrl, superHeroData);
  }

  DeleteSuperHero(superHeroId: number){
    const superHeroIdUrl = `${superHeroUrl}?id=${superHeroId}`;
    return this.http.delete(superHeroIdUrl);
  }
}

@Injectable({
  providedIn: 'root'
})
export class SuperPowerService{
  constructor(private http: HttpClient) {
  }
  GetSuperPower(){
    return this.http.get(superPowerurl);
  }

  PostSuperPower(superHeroId: number, superPowerName: string, fightingSkill: string){
    const superPowerData ={
      superPowerName: superPowerName,
      fightingSkill: fightingSkill,
      superHeroId: superHeroId
    };
    return this.http.post(superPowerurl, superPowerData);
  }
  PutSuperPower(superPowerId: number,superHeroId: number, superPowerName: string, fightingSkill: string){
    const superPowerIdUrl = `${superPowerurl}?id=${superPowerId}`;
    const superPowerData ={
      superPowerName: superPowerName,
      fightingSkill: fightingSkill,
      superHeroId: superHeroId
    };
    return this.http.put(superPowerIdUrl, superPowerData);
  }

  deleteSuperPower(superPowerId:number){
    const superPowerIdUrl = `${superPowerurl}?id=${superPowerId}`;
    return this.http.delete(superPowerIdUrl);
  }

}

