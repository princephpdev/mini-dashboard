import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { Router } from "@angular/router";

@Component({
  selector: "app-button",
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
})
export class ButtonComponent {
  @Input() text: string = "Button";
  @Input() color: string = "primary";
  @Input() link: string = "";

  constructor(private router: Router) {}

  navigateTo() {
    if (this.link) {
      this.router.navigate([this.link]);
    } else {
      console.warn("No link provided for navigation.");
    }
  }
}
