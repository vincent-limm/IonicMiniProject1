import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Barang } from "src/app/barang.model";
import { CpuService } from "../cpu/cpu.service";
import { GpuService } from "../gpu/gpu.service";
import { MotherboardService } from "../motherboard/motherboard.service";
import { RamService } from "../ram/ram.service";

@Injectable({
  providedIn: "root",
})
export class BarangService {
  barang: Barang[] = [];

  constructor(
    private cpuService: CpuService,
    private motherboardService: MotherboardService,
    private gpuService: GpuService,
    private ramService: RamService
  ) {
    this.saveAllBarang();
  }

  saveAllBarang() {
    this.cpuService.getAllCpu().forEach((cpu) => {
      this.barang.push({
        id: cpu.id,
        merek: cpu.merek,
        model: cpu.model,
        foto: cpu.foto,
        stock: cpu.stock,
        harga: cpu.harga,
      });
    });

    this.gpuService.getAllGpu().forEach((gpu) => {
      this.barang.push({
        id: gpu.id,
        merek: gpu.merek,
        model: gpu.model,
        foto: gpu.foto,
        stock: gpu.stock,
        harga: gpu.harga,
      });
    });

    this.motherboardService.getAllMotherboard().forEach((motherboard) => {
      this.barang.push({
        id: motherboard.id,
        merek: motherboard.merek,
        model: motherboard.model,
        foto: motherboard.foto,
        stock: motherboard.stock,
        harga: motherboard.harga,
      });
    });

    this.ramService.getAllRam().forEach((ram) => {
      this.barang.push({
        id: ram.id,
        merek: ram.merek,
        model: ram.model,
        foto: ram.foto,
        stock: ram.stock,
        harga: ram.harga,
      });
    });
  }

  saveCpu() {
    const last: any = this.cpuService.getAllCpu()[
      this.cpuService.getAllCpu().length - 1
    ];
    this.barang.push(last);
  }

  deleteBarang(barangId: string) {
    this.barang = this.barang.filter((barang) => {
      return barang.id !== barangId;
    });
  }

  editBarang(form: NgForm, barangId: string) {
    return {
      ...this.barang.find((barang) => {
        if (barang.id === barangId) {
          (barang.merek = form.value.merek),
            (barang.model = form.value.model),
            (barang.foto = form.value.foto),
            (barang.stock = form.value.stock),
            (barang.harga = form.value.harga);
        }
      }),
    };
  }

  saveGpu() {
    const last: any = this.gpuService.getAllGpu()[
      this.gpuService.getAllGpu().length - 1
    ];
    this.barang.push(last);
  }

  saveMobo() {
    const last: any = this.motherboardService.getAllMotherboard()[
      this.motherboardService.getAllMotherboard().length - 1
    ];
    this.barang.push(last);
  }

  saveRam() {
    const last: any = this.ramService.getAllRam()[
      this.ramService.getAllRam().length - 1
    ];
    this.barang.push(last);
  }

  getAllBarangs() {
    return this.barang;
  }
}
