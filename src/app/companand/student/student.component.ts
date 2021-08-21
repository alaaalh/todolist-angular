import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { TaskService } from 'src/app/service/text.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private _httpclient: HttpClient
  ) {}

  ngOnInit(): void {
    this._httpclient
      .get<any>('http://api.mohamed-sadek.com/task/get')
      .subscribe(
        (response) => {
          this.students = response['Data'] as Student[];
        },
        (error) => {
          alert('sorry please try again');
        }
      );
  }

  students: Student[] = [];
  addEmployee(name: string, data: string) {
    if (this.taskService.emptyText(name)) {
      alert('sorry empty text');
    } else {
      let student: Student = new Student();
      student.Title = name;
      student.ID = data;
      this.students.push(student);
    }
  }

  onchangestatus() {
    return this.students.filter((x) => !x.IsDone).length;
  }

  changestatuse(item: Student) {
    item.IsDone = !item.IsDone;
  }
  deletstudent(index: number) {
    this.students.splice(index, 1);
  }
 
}
