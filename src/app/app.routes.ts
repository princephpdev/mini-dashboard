import { Routes } from "@angular/router";
import { HomescreenComponent } from "./pages/homescreen/homescreen.component";
import { TablescreenComponent } from "./pages/tablescreen/tablescreen.component";
import { DirectivescreenComponent } from "./pages/directivescreen/directivescreen.component";

export const routes: Routes = [
  { path: "", component: HomescreenComponent },
  { path: "table", component: TablescreenComponent },
  { path: "directive-screen", component: DirectivescreenComponent },
];
