import { Component } from "@angular/core";
import { Barang } from "../barang.model";
import { BarangService } from "../services/barang/barang.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  barang: Barang[];

  public list: boolean;
  public grid: boolean;

  constructor(private barangService: BarangService) {}

  ngOnInit() {
    this.list = true;
    this.grid = false;
  }

  ionViewWillEnter() {
    this.barang = this.barangService.getAllBarangs();
  }

  changeGrid() {
    this.list = false;
    this.grid = true;
  }

  changeList() {
    this.list = true;
    this.grid = false;
  }
}
