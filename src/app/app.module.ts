import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchListComponent } from './search-list/search-list.component';
import { HttpClientModule } from '@angular/common/http';
import { VideoYtComponent } from './video-yt/video-yt.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SearchListComponent,
    VideoYtComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    ],
    providers: [VideoYtComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }
