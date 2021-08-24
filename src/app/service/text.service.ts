import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Student } from './../companand/student/student';
import { environment } from './../../environments/environment.prod';

@Injectable()
export class TaskService
{

    constructor(private _httpclient:HttpClient){}
    emptyText(text:string){
        if(text==null||text.length==0)return true;

        return false;
    }
    

    creat(student:Student){
        return this._httpclient.post<any>(`${environment.apiUrl}/task/post`, student)
    }

    updata(student:Student){
        return this._httpclient.put<any>(`${environment.apiUrl}/task/put`, student)
    }

    get(){
        return this._httpclient.get<any>(`${environment.apiUrl}/task/get`)
    }
    getDetails(id:number){
        return this._httpclient.get<any>(`${environment.apiUrl}/task/GetByID?id=${id}`)
    }

    delete(id:number){
        return this._httpclient.delete<any>(`${environment.apiUrl}/task/delete?id=`+id)
    }
}