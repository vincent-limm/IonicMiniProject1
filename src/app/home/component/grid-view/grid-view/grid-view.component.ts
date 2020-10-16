import { Component, Input, OnInit } from "@angular/core";
import { Barang } from "src/app/barang.model";

@Component({
  selector: "app-grid-view",
  templateUrl: "./grid-view.component.html",
  styleUrls: ["./grid-view.component.scss"],
})
export class GridViewComponent implements OnInit {
  @Input() barang: Barang[];

  constructor() {}

  ngOnInit() {}
}
