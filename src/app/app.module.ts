import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VirtualScrollComponent } from './components/virtual-scroll/virtual-scroll.component';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    VirtualScrollComponent,
    InfiniteScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollingModule,
    InfiniteScrollModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
