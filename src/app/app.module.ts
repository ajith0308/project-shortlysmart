import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule,
    FormsModule, RouterModule.forRoot([]),
    
  ],
  providers: [],
  bootstrap: [], // Remove AppComponent from the bootstrap array
})
export class AppModule { }
