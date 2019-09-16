import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { ViewMovieComponent } from "./components/view-movie/view-movie";
import { CategoriasComponent } from './categorias/categorias.component';


export const ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchComponent },
  { path: "movie/:id", component: ViewMovieComponent },
  { path: "category", component: CategoriasComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];
