import { Component, OnInit } from "@angular/core";
import { AlertController, ModalController } from "@ionic/angular";
import { Barang } from "../barang.model";
import { BarangService } from "../services/barang/barang.service";
import { CpuService } from "../services/cpu/cpu.service";
import { GpuService } from "../services/gpu/gpu.service";
import { MotherboardService } from "../services/motherboard/motherboard.service";
import { RamService } from "../services/ram/ram.service";
import { ModalAddComponent } from "./component/modal-add/modal-add/modal-add.component";
import { ModalEditComponent } from "./component/modal-edit/modal-edit/modal-edit.component";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.page.html",
  styleUrls: ["./admin.page.scss"],
})
export class AdminPage implements OnInit {
  barang: Barang[];

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private barangService: BarangService,
    private cpuService: CpuService,
    private gpuService: GpuService,
    private ramService: RamService,
    private motherboardService: MotherboardService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.barang = this.barangService.getAllBarangs();
  }

  deleteItem(barangId: string) {
    if (barangId.substring(0, 2) == "cp") {
      this.cpuService.deleteCpu(barangId);
    } else if (barangId.substring(0, 2) == "gp") {
      this.gpuService.deleteGpu(barangId);
    } else if (barangId.substring(0, 2) == "rm") {
      this.ramService.deleteRam(barangId);
    } else if (barangId.substring(0, 2) == "mb") {
      this.motherboardService.deleteMotherboard(barangId);
    }
    this.barangService.deleteBarang(barangId);
    this.barang = this.barangService.getAllBarangs();
  }

  async presentModalEdit(barangId: string) {
    const modal = await this.modalCtrl.create({
      component: ModalEditComponent,
      componentProps: { id: barangId },
    });

    modal.onDidDismiss().then((resultData) => {});

    return await modal.present();
  }

  async presentModalAdd() {
    const modal = await this.modalCtrl.create({
      component: ModalAddComponent,
    });

    modal.onDidDismiss().then((resultData) => {
      this.barang = this.barangService.getAllBarangs();
    });

    return await modal.present();
  }

  async presentAlert(barangId: string) {
    const alert = await this.alertCtrl.create({
      header: "Hapus Item",
      message:
        "Apakah yakin ingin menghapus? Jika sudah dihapus, tidak bisa dikembalikan lagi.",
      buttons: [
        {
          text: "Batal",
          role: "cancel",
        },
        {
          text: "Hapus",
          handler: () => this.deleteItem(barangId),
        },
      ],
    });
    await alert.present();
  }
}
