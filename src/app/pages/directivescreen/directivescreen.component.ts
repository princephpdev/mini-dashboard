import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { CustomTextDirective } from "../../directives/customTextDirective";

@Component({
  selector: "app-directivescreen",
  standalone: true,
  imports: [CommonModule, CustomTextDirective, MatCardModule],
  templateUrl: "./directivescreen.component.html",
  styleUrl: "./directivescreen.component.scss",
})
export class DirectivescreenComponent {}
