import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { fadeInOut } from "../../utils/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { ButtonComponent } from "../button/button.component";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  standalone: true,
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
  animations: [fadeInOut],
  imports: [CommonModule, MatToolbarModule, MatIconModule, ButtonComponent],
})
export class NavbarComponent {
  showNavigation: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showNavigation =
          event.urlAfterRedirects === "/table" ||
          event.urlAfterRedirects === "/directive-screen";
      }
    });
  }
}
