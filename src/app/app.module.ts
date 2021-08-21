import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './companand/student/student.component';
import { TaskService } from './service/text.service';
import {HttpClientModule} from '@angular/common/http' 

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
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
