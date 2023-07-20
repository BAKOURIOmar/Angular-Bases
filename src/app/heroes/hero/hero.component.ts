import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name :string ="ironman";
  public age : number =32;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }


  getheroDescreption():string{
    return `${this.name} - ${this.age}`
  }
  changeHero():void{
    this.name='Spiderman';
  }
  changeAge():void{
    this.age=99;
  }
  resteForm():void{
    this.age=32;
    this.name='ironman'
  }
}
