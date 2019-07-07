import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDocumentsRoutingModule } from './list-documents-routing.module';
import { ListDocumentsComponent } from './list-documents.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FilterComponent } from './filter/filter.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  declarations: [
    ListDocumentsComponent,
    UserDetailsComponent,
    ToolbarComponent,
    FilterComponent,
    WorkspaceComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    ListDocumentsRoutingModule,
    ButtonsModule
  ]
})
export class ListDocumentsModule { }
