import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
