import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from './../../service/text.service';
import { Student } from './../student/student';

@Component({
  selector: 'app-detalis',
  templateUrl: './detalis.component.html',
  styleUrls: ['./detalis.component.css']
})
export class DetalisComponent implements OnInit {
 ID:number=0;
 student:Student=new Student
//  student:Student =new Student(); 
  constructor(private _activateRoute:ActivatedRoute ,private _taskservace:TaskService) { }

  ngOnInit(): void {
    this._activateRoute.paramMap.subscribe(params=>{
      this.ID = Number(params.get('id'))
      this._taskservace.getDetails(this.ID).subscribe(response=>{
        this.student=response.Data;
      })
    })
  }

}
