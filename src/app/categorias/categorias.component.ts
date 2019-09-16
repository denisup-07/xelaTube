import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviedbService } from '../services/moviedb.service';
import {moveIn, fallIn} from '../router.animation';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn': ''}
})
export class CategoriasComponent implements OnInit {


  movies: any[]=[];
  genre: string = '';
  constructor(private route:Router,private router:ActivatedRoute,
    private moviedb: MoviedbService) { 
      const id_genre = this.router.snapshot.queryParams['id_genre'];
      this.genre = this.router.snapshot.queryParams['nameGenre'];
     
      this.moviedb.getGenresMovies(id_genre)
          .subscribe(movies =>{   
          this.movies= movies;
            console.log(movies.title);
         
         
          })


    }


    
    verPelicula(item: any) {

      //get movie id
      let movieId;
  
      movieId = item.id;
      
      //navigate route
      this.route.navigate(["/movie", movieId]);
    }
  

  ngOnInit() {
    document.getElementById("scroll").scrollIntoView();
  }

}
