import { Injectable } from '@angular/core';
import { MyItems } from './my-items';

@Injectable()
export class TestDataService {

  constructor() { }
  public items:MyItems[] = [];

  readonly One = "Items";

  getItems(){
    if(localStorage.getItem(this.One) != null){
      this.items = JSON.parse( localStorage.getItem(this.One));
    }
  }

  addItem(text:MyItems){
    this.items.push(text);
    localStorage.setItem(this.One, JSON.stringify(this.items));
  }

  deleteItem(id){
    this.items.splice(id,1);
    localStorage.setItem(this.One, JSON.stringify(this.items));
  }

  addComment(id:number,text:String){
    this.items[id].comments.push(text);
    localStorage.setItem(this.One, JSON.stringify(this.items));
  }

  // //=====================================
  // getCommentsOther(){
  //   if(localStorage.getItem(this.Other) != null){
  //     this.comments2 = JSON.parse( localStorage.getItem(this.Other));
  //   }
  // }


}
