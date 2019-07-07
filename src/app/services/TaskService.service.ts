import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TaskService {
  taskListUrl: string = '/assets/moks/taskList.json'
  taskDataUrl: string = '/assets/moks/taskData.json'
  constructor(private http: HttpClient) {}
  getList() {
    return this.http.get(this.taskListUrl)
  }
  getTask(id: string) {}
}