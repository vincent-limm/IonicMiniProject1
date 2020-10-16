import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./home.page";

import { HomePageRoutingModule } from "./home-routing.module";
import { GridViewComponent } from "./component/grid-view/grid-view/grid-view.component";
import { ListViewComponent } from "./component/list-view/list-view/list-view.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, GridViewComponent, ListViewComponent],
})
export class HomePageModule {}
