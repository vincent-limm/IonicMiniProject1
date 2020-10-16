import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Ram } from "src/app/ram.model";

@Injectable({
  providedIn: "root",
})
export class RamService {
  private ram: Ram[] = [
    {
      id: "rm1",
      merek: "Zeppelin",
      model: "Zeppelin DDR3 PC12800 4GB",
      foto:
        "https://assets.quzo.net/site/catalogue/large/2017/11/zeppelin-4gb-no-heatsink-1-x-4gb-ddr3-1600mhz-dimm-system-memory.jpg?scale.height=400",
      speed: 1600,
      ukuran: 4,
      stock: 10,
      harga: 305000,
    },
    {
      id: "rm2",
      merek: "Visipro DDR4 PC19200 16GB",
      model:
        "DDR4 XPG SPECTRIX D60G PC25600 3200MHz 32GB (2X16GB) Dual Channel - RGB",
      foto:
        "https://www.adata.com/upload/ProductGallery/productGallery7055.jpg",
      speed: 2666,
      ukuran: 16,
      stock: 10,
      harga: 1150000,
    },
  ];

  getAllRam() {
    return this.ram;
  }

  getRam(ramId: string) {
    return this.ram.find((ram) => {
      return ram.id === ramId;
    });
  }

  addRam(form: NgForm) {
    const idLength: number = this.ram.length + 1;
    this.ram.push({
      id: "rm".concat(idLength.toString()),
      merek: form.value.merek,
      model: form.value.model,
      foto: form.value.imageUrl,
      speed: form.value.speed,
      ukuran: form.value.ukuran,
      stock: form.value.stock,
      harga: form.value.harga,
    });
  }

  deleteRam(ramId: string) {
    this.ram = this.ram.filter((ram) => {
      return ram.id !== ramId;
    });
  }

  editRam(form: NgForm, ramId: string) {
    return {
      ...this.ram.find((ram) => {
        if (ram.id === ramId) {
          (ram.merek = form.value.merek),
            (ram.model = form.value.model),
            (ram.foto = form.value.imageUrl),
            (ram.speed = form.value.speed),
            (ram.ukuran = form.value.ukuran),
            (ram.stock = form.value.stock),
            (ram.harga = form.value.harga);
        }
      }),
    };
  }

  constructor() {}
}
