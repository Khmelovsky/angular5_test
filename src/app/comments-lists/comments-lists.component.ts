import { Component, OnInit } from '@angular/core';
import { TestDataService } from '../test-data.service';
import { NgForm } from '@angular/forms';
import { MyItems } from '../my-items';
@Component({
  selector: 'app-comments-lists',
  templateUrl: './comments-lists.component.html',
  styleUrls: ['./comments-lists.component.css']
})


export class CommentsListsComponent implements OnInit {
  FirstText = "";
  SecondText = "";
  selectedi1 = 0;
  
  constructor(public _testDataService:TestDataService) { }

  addOne(){
    if(this.FirstText.length == 0) return;
    this._testDataService.addItem(new MyItems(this.FirstText));
    this.FirstText = "";
  }

  addOther(){
    if(this.SecondText.length == 0) return;
    this._testDataService.addComment(this.selectedi1, this.SecondText);
    this.SecondText = "";
  }

  selectOne(i){
    this.selectedi1 = i;
  }

  ngOnInit() {
    this._testDataService.getItems();
  }

}
