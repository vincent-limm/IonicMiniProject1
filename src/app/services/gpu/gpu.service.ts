import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Gpu } from "src/app/gpu.model";

@Injectable({
  providedIn: "root",
})
export class GpuService {
  private gpu: Gpu[] = [
    {
      id: "gp1",
      merek: "NVIDIA",
      model: "GeForce 210",
      foto: "https://tpucdn.com/gpu-specs/images/c/2020-front.small.jpg",
      stock: 10,
      harga: 375000,
    },
    {
      id: "gp2",
      merek: "NVIDIA",
      model: "Tesla P100",
      foto:
        "https://static.bhphoto.com/images/images500x500/nvidia_nvidia_900_2h400_0000_000_tesla_p100_16gb_cowos_1510173392000_1368043.jpg",
      stock: 1,
      harga: 100000000,
    },
  ];

  getAllGpu() {
    return this.gpu;
  }

  getGpu(gpuId: string) {
    return this.gpu.find((gpu) => {
      return gpu.id === gpuId;
    });
  }

  addGpu(form: NgForm) {
    const idLength: number = this.gpu.length + 1;
    this.gpu.push({
      id: "gp".concat(idLength.toString()),
      merek: form.value.merek,
      model: form.value.model,
      foto: form.value.imageUrl,
      stock: form.value.stock,
      harga: form.value.harga,
    });
  }

  deleteGpu(gpuId: string) {
    this.gpu = this.gpu.filter((gpu) => {
      return gpu.id !== gpuId;
    });
  }

  editGpu(form: NgForm, gpuId: string) {
    return {
      ...this.gpu.find((gpu) => {
        if (gpu.id === gpuId) {
          (gpu.merek = form.value.merek),
            (gpu.model = form.value.model),
            (gpu.foto = form.value.imageUrl),
            (gpu.stock = form.value.stock),
            (gpu.harga = form.value.harga);
        }
      }),
    };
  }

  constructor() {}
}
