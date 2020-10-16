import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import {
  LoadingController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { BarangService } from "src/app/services/barang/barang.service";
import { CpuService } from "src/app/services/cpu/cpu.service";
import { GpuService } from "src/app/services/gpu/gpu.service";
import { MotherboardService } from "src/app/services/motherboard/motherboard.service";
import { RamService } from "src/app/services/ram/ram.service";

@Component({
  selector: "app-modal-add",
  templateUrl: "./modal-add.component.html",
  styleUrls: ["./modal-add.component.scss"],
})
export class ModalAddComponent implements OnInit {
  jenis: string;

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private cpuService: CpuService,
    private gpuService: GpuService,
    private motherboardService: MotherboardService,
    private ramService: RamService,
    private barangService: BarangService
  ) {}

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss(null, "cancel");
  }

  jenisBarang($event) {
    this.jenis = $event.target.value;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    if (this.jenis == "cpu") {
      this.cpuService.addCpu(form);
      this.barangService.saveCpu();
    } else if (this.jenis == "gpu") {
      this.gpuService.addGpu(form);
      this.barangService.saveGpu();
    } else if (this.jenis == "motherboard") {
      this.motherboardService.addMotherboard(form);
      this.barangService.saveMobo();
    } else if (this.jenis == "ram") {
      this.ramService.addRam(form);
      this.barangService.saveRam();
    }
  }

  onSave() {
    this.presentLoading().then(() => {
      this.modalCtrl.dismiss({ message: "added" }, "confirm");
      this.presentToast();
    });
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: "Adding ...",
      duration: 1000,
    });
    await loading.present();

    await loading.onDidDismiss();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: "Added.",
      position: "bottom",
      color: "success",
      duration: 1000,
    });

    toast.present();
  }
}
