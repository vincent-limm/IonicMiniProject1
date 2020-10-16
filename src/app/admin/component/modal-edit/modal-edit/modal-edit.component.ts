import { Component, Input, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import {
  AlertController,
  LoadingController,
  ModalController,
} from "@ionic/angular";
import { BarangService } from "src/app/services/barang/barang.service";
import { CpuService } from "src/app/services/cpu/cpu.service";
import { GpuService } from "src/app/services/gpu/gpu.service";
import { MotherboardService } from "src/app/services/motherboard/motherboard.service";
import { RamService } from "src/app/services/ram/ram.service";

@Component({
  selector: "app-modal-edit",
  templateUrl: "./modal-edit.component.html",
  styleUrls: ["./modal-edit.component.scss"],
})
export class ModalEditComponent implements OnInit {
  @Input() id: string;
  barang: any;

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private cpuService: CpuService,
    private gpuService: GpuService,
    private motherboardService: MotherboardService,
    private ramService: RamService,
    private barangService: BarangService
  ) {}

  ngOnInit() {
    if (this.id.substring(0, 2) == "cp") {
      this.barang = this.cpuService.getCpu(this.id);
    } else if (this.id.substring(0, 2) == "gp") {
      this.barang = this.gpuService.getGpu(this.id);
    } else if (this.id.substring(0, 2) == "mb") {
      this.barang = this.motherboardService.getMotherboard(this.id);
    } else if (this.id.substring(0, 2) == "rm") {
      this.barang = this.ramService.getRam(this.id);
    }
  }

  onCancel() {
    this.modalCtrl.dismiss(null, "cancel");
  }

  onSubmit(form: NgForm) {
    if (this.id.substring(0, 2) == "cp") {
      this.cpuService.editCpu(form, this.id);
    } else if (this.id.substring(0, 2) == "gp") {
      this.gpuService.editGpu(form, this.id);
    } else if (this.id.substring(0, 2) == "mb") {
      this.motherboardService.editMotherboard(form, this.id);
    } else if (this.id.substring(0, 2) == "rm") {
      this.ramService.editRam(form, this.id);
    }
    this.barangService.editBarang(form, this.id);
    this.onEdit();
  }

  onEdit() {
    this.presentLoading().then(() => {
      this.modalCtrl.dismiss({ message: "edited" }, "confirm");
    });
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: "editing...",
      duration: 1000,
    });
    await loading.present();
    await loading.onDidDismiss();
  }

  async presentAlert(form: NgForm) {
    const alert = await this.alertCtrl.create({
      header: "Edit Item",
      message: "Apakah sudah yakin?",
      buttons: [
        {
          text: "Batal",
          role: "cancel",
        },
        {
          text: "Ok",
          handler: () => this.onSubmit(form),
        },
      ],
    });
    await alert.present();
  }
}
