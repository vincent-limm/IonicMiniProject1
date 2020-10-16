import { Component, Input, OnInit } from "@angular/core";
import { Barang } from "src/app/barang.model";

@Component({
  selector: "app-list-view",
  templateUrl: "./list-view.component.html",
  styleUrls: ["./list-view.component.scss"],
})
export class ListViewComponent implements OnInit {
  @Input() barang: Barang[];

  constructor() {}

  ngOnInit() {}
}
