import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { IsvisibleComponent } from './isvisible/isvisible.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    IsvisibleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
