import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ListComponent } from "./list/list.component";
import { RightSidebarComponent } from "./right-sidebar/right-sidebar.component";
import { UpdateSidebarComponent } from "./update-sidebar/update-sidebar.component";
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    RightSidebarComponent,
    UpdateSidebarComponent,
    ListComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    RightSidebarComponent,
    UpdateSidebarComponent,
    ListComponent,
    DropdownComponent
  ],
})
export class SharedModule { }
