import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/TaskService.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.sass']
})
export class DocumentComponent implements OnInit {
  docId: string
  docData: object
  constructor(private ar: ActivatedRoute, private taskService: TaskService) {
    ar.params.subscribe(param => this.docId = param.id)
  }

  ngOnInit() {
    console.log(this.docId)
    console.log(this.taskService.getTask(this.docId))
  }

}