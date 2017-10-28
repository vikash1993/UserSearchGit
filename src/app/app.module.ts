import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, NgModel } from '@angular/forms';


import { AppComponent }  from './app.component';
import { GithubComponent } from './component/github.component';
import { GithubService } from './services/github.service';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, GithubComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GithubService]
})
export class AppModule { }
