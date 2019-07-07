import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/TaskService.service';

export interface TaskList {
  number: string,
  company: string,
  status: string,
  object: string,
  equipment: string,
  timeStart: string,
  timeEnd: string,
  allowStart: string,
  allowEnd: string,
  kind: string,
  category: string,
  upr: string,
}

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.sass']
})
export class WorkspaceComponent implements OnInit {
  taskList: TaskList
  constructor(private taskService: TaskService) { }
  ngOnInit() {
    this.taskService.getList().subscribe((data: TaskList) => {
      this.taskList = data
    })
  }
}
