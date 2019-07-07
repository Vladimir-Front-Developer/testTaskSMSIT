import { Component, OnInit } from '@angular/core';
import { TaskListService } from 'src/app/services/TaskListService.service';

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
  constructor(private taskListService: TaskListService) { }
  ngOnInit() {
    this.taskListService.getList().subscribe((data: TaskList) => {
      this.taskList = data
    })
  }

}
