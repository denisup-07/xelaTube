import { Component, OnInit } from "@angular/core";
import { MoviedbService } from "../../services/moviedb.service";
import {moveIn, fallIn} from '../../router.animation';
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn': ''}
})
export class SearchComponent {
  state: string='';
  peliculas: any[] = [];
  loading: boolean;

  constructor(private moviedb: MoviedbService) {}

  buscar(termino: string) {
    console.log(termino);

    this.loading = true;
    this.moviedb.getBusquedaPeliculas(termino).subscribe((data: any) => {
      console.log(data);

      this.peliculas = data;
      this.loading = false;
    });
  }
}
