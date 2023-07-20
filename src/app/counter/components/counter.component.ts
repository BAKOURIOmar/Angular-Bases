import { Component } from "@angular/core";

@Component({
  selector:'app-counter',
  template:`<h1>hola counter</h1>
  <h3>Counter : {{counter}}</h3>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resset()">Resset</button>
  <button (click)="increaseBy(-1)">-1</button>


  `
})
export class CounterComponent{
  public counter :  number =10;


  increaseBy(value :number):void{
   this.counter+=value;
  }
  resset():void{
   this.counter=10;
  }
}
