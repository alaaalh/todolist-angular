import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './companand/about/about.component';
import { ContectComponent } from './companand/contect/contect.component';
import { DetalisComponent } from './companand/detalis/detalis.component';
import { HomeComponent } from './companand/home/home.component';
import { StudentComponent } from './companand/student/student.component';


const routes: Routes = [
  {path:"contact",component:ContectComponent},
  {path:"about",component:AboutComponent},
  {path:"home",component:HomeComponent},
  {path:"student",component:StudentComponent},
  {path:'details/:id',component:DetalisComponent},
  {path:'',component:StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
