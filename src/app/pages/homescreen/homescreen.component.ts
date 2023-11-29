import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: "app-homescreen",
  standalone: true,
  templateUrl: "./homescreen.component.html",
  styleUrl: "./homescreen.component.scss",
  imports: [CommonModule, ButtonComponent],
})
export class HomescreenComponent {}
