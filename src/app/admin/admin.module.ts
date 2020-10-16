import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AdminPageRoutingModule } from "./admin-routing.module";

import { AdminPage } from "./admin.page";
import { ModalAddComponent } from "./component/modal-add/modal-add/modal-add.component";
import { ModalEditComponent } from "./component/modal-edit/modal-edit/modal-edit.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [AdminPage, ModalAddComponent, ModalEditComponent],
})
export class AdminPageModule {}
