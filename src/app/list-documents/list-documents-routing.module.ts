import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDocumentsComponent } from './list-documents.component';
import { DocumentComponent } from './document/document.component';

const routes: Routes = [
  { path: 'list', component: ListDocumentsComponent },
  { path: 'list/:id', component: DocumentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDocumentsRoutingModule { }
