import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CpuService } from "../services/cpu/cpu.service";
import { GpuService } from "../services/gpu/gpu.service";
import { MotherboardService } from "../services/motherboard/motherboard.service";
import { RamService } from "../services/ram/ram.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"],
})
export class DetailPage implements OnInit {
  barang: any;
  id: string;

  constructor(
    public routerCtrl: Router,
    private cpuService: CpuService,
    private gpuService: GpuService,
    private motherboardService: MotherboardService,
    private ramService: RamService
  ) {
    this.id = this.routerCtrl.url.substring(1);
  }

  ngOnInit() {
    if (this.routerCtrl.url.substring(1, 3) == "cp") {
      this.barang = this.cpuService.getCpu(this.id);
    } else if (this.routerCtrl.url.substring(1, 3) == "gp") {
      this.barang = this.gpuService.getGpu(this.id);
    } else if (this.routerCtrl.url.substring(1, 3) == "mb") {
      this.barang = this.motherboardService.getMotherboard(this.id);
    } else if (this.routerCtrl.url.substring(1, 3) == "rm") {
      this.barang = this.ramService.getRam(this.id);
    }
  }
}
