import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentsListsComponent } from './comments-lists/comments-lists.component';
import { TestDataService } from './test-data.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CommentsListsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TestDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
