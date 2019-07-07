import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDocumentsComponent } from './list-documents.component';

const routes: Routes = [
  { path: 'list', component: ListDocumentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDocumentsRoutingModule { }
