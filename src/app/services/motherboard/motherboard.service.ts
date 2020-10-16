import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Motherboard } from "src/app/motherboard.model";

@Injectable({
  providedIn: "root",
})
export class MotherboardService {
  private motherboard: Motherboard[] = [
    {
      id: "mb1",
      merek: "Asus",
      model: "Asus AM1M-A",
      foto:
        "https://www.asus.com/media/global/products/lE2qeQLBYs7UGtEq/P_setting_fff_1_90_end_500.png",
      chipset: "AMD Sempron & Athlon-Series APUs",
      merek_proci: "AMD",
      stock: 10,
      harga: 535000,
    },
    {
      id: "mb2",
      merek: "Biostar",
      model: "A780LB",
      foto: "https://www.biostar.com.tw/upload/Motherboard/b20100907.jpg",
      chipset: "AMD 760G / SB710",
      merek_proci: "AMD",
      stock: 10,
      harga: 680000,
    },
  ];

  getAllMotherboard() {
    return this.motherboard;
  }

  getMotherboard(motherboardId: string) {
    return this.motherboard.find((motherboard) => {
      return motherboard.id === motherboardId;
    });
  }

  addMotherboard(form: NgForm) {
    const idLength: number = this.motherboard.length + 1;
    this.motherboard.push({
      id: "mb".concat(idLength.toString()),
      merek: form.value.merek,
      model: form.value.model,
      foto: form.value.imageUrl,
      chipset: form.value.chipset,
      merek_proci: form.value.merek_proci,
      stock: form.value.stock,
      harga: form.value.harga,
    });
  }

  deleteMotherboard(motherboardId: string) {
    this.motherboard = this.motherboard.filter((motherboard) => {
      return motherboard.id !== motherboardId;
    });
  }

  editMotherboard(form: NgForm, motherboardId: string) {
    return {
      ...this.motherboard.find((motherboard) => {
        if (motherboard.id === motherboardId) {
          (motherboard.merek = form.value.merek),
            (motherboard.model = form.value.model),
            (motherboard.foto = form.value.imageUrl),
            (motherboard.chipset = form.value.chipset),
            (motherboard.merek_proci = form.value.merek_proci),
            (motherboard.stock = form.value.stock),
            (motherboard.harga = form.value.harga);
        }
      }),
    };
  }

  constructor() {}
}
