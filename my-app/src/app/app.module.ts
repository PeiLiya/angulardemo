import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here ngModule虽然是有效的angular指令，但是默认不可用，它属于FormsModule，因此需要导入FormsModule后再使用

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [ //该应用所需外部模块的列表。
    BrowserModule,
    AppRoutingModule, 
    FormsModule //为了ngModule导入的FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
