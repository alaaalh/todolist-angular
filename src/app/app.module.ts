import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './companand/student/student.component';
import { TaskService } from './service/text.service';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './companand/about/about.component';
import { ContectComponent } from './companand/contect/contect.component'; 
import { HomeComponent } from './companand/home/home.component';
import { DetalisComponent } from './companand/detalis/detalis.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AboutComponent,
    ContectComponent,
    HomeComponent,
    DetalisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
