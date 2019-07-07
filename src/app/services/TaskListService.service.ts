import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TaskListService {
  taskListUrl: string = '/assets/moks/taskList.json'
  constructor(private http: HttpClient) {}
  getList() {
    return this.http.get(this.taskListUrl)
  }
}