import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.page.html",
  styleUrls: ["./about.page.scss"],
})
export class AboutPage implements OnInit {
  image = "https://www.streamscheme.com/wp-content/uploads/2020/04/pepega.png";

  constructor() {}

  ngOnInit() {}
}
