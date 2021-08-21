import { Injectable } from "@angular/core";

@Injectable()
export class TaskService
{
    emptyText(text:string){
        if(text==null||text.length==0)return true;

        return false;
    }
}