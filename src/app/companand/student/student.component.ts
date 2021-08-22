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
  ) {}

  ngOnInit(): void {
    this.taskService.get().subscribe(
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
      this.taskService.creat(student).subscribe(
        (response) => {
          student.ID = response['Data'] as number;
          this.students.push(student);
        },
        (error) => {}
      );
    }
  }

  onchangestatus() {
    return this.students.filter((x) => !x.IsDone).length;
  }

  changestatuse(item: Student) {
    item.IsDone = !item.IsDone;
    this.taskService.updata(item).subscribe(
      (response) => {
        alert('updata');
      },
      (error) => {}
    );
  }
  deletstudent(index: number) {
    let student = this.students[index];
    this.taskService.delete(index).subscribe(
      (response) => {
        this.students.splice(index, 1);
      },
      (error) => {
        alert('sorry please try again');
      }
    );
  }
}
