import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import {GenresListModel} from '../../genre-list';
import { MoviedbService } from 'src/app/services/moviedb.service';

@Component({
  selector: "app-tarjetas",
  templateUrl: "./movie-list.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent {

  @Input() items: any[] = [];

  //statement of genres
  genres: GenresListModel;

  

  constructor(private router: Router,private _moviesServices: MoviedbService) { }

  //function for view movies 

  verPelicula(item: any) {

    //get movie id
    let movieId;

    movieId = item.id;
    
    //navigate route
    this.router.navigate(["/movie", movieId]);
  }

  ngOnInit() {
    this._moviesServices.getGenres().subscribe( res => {
        this.genres = res.genres;
      }
    );
  }
}
