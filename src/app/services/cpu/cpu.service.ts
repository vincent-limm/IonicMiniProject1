import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Cpu } from "src/app/cpu.model";

@Injectable({
  providedIn: "root",
})
export class CpuService {
  private cpu: Cpu[] = [
    {
      id: "cp1",
      merek: "Intel",
      model: "Celeron G1610 2.6 Ghz Cache 2 MB (BOX)",
      foto:
        "https://ecs7.tokopedia.net/img/cache/700/product-1/2020/2/13/13464300/13464300_96fec56d-510e-42ed-a28b-49e25687b199_700_700",
      base_clock: 0.65,
      boost_clock: 1.05,
      core: 2,
      thread: 2,
      stock: 10,
      harga: 345000,
    },
    {
      id: "cp2",
      merek: "Intel",
      model: "Pentium G4560 (3.5 Ghz) Cache 3 MB (BOX)",
      foto:
        "https://ecs7.tokopedia.net/img/cache/700/product-1/2016/5/20/863736/863736_a02922cd-79e3-46fa-b621-a802cfaafefd.png",
      base_clock: 3.5,
      boost_clock: 4.0,
      core: 2,
      thread: 4,
      stock: 10,
      harga: 600000,
    },
  ];

  getAllCpu() {
    return this.cpu;
  }

  getCpu(cpuId: string) {
    return this.cpu.find((cpu) => {
      return cpu.id === cpuId;
    });
  }

  addCpu(form: NgForm) {
    const idLength: number = this.cpu.length + 1;
    this.cpu.push({
      id: "cp" + idLength.toString() + "",
      merek: form.value.merek,
      model: form.value.model,
      foto: form.value.imageUrl,
      base_clock: form.value.base_clock,
      boost_clock: form.value.boost_clock,
      core: form.value.core,
      thread: form.value.thread,
      stock: form.value.stock,
      harga: form.value.harga,
    });
  }

  deleteCpu(cpuId: string) {
    this.cpu = this.cpu.filter((cpu) => {
      return cpu.id !== cpuId;
    });
  }

  editCpu(form: NgForm, cpuId: string) {
    return {
      ...this.cpu.find((cpu) => {
        if (cpu.id === cpuId) {
          (cpu.merek = form.value.merek),
            (cpu.model = form.value.model),
            (cpu.foto = form.value.imageUrl),
            (cpu.base_clock = form.value.base_clock),
            (cpu.boost_clock = form.value.boost_clock),
            (cpu.core = form.value.core),
            (cpu.thread = form.value.thread),
            (cpu.stock = form.value.stock),
            (cpu.harga = form.value.harga);
        }
      }),
    };
  }

  constructor() {}
}
