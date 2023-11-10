export interface SuperHero{
  superHeroId: number;
  superHeroName: string;
  superHeroAge: number;
}

export interface SuperPower{
  superPowerId: number;
  superPowerName: string;
  fightingSkill: string;
  superHeroId: number;

}
