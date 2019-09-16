import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {moveIn, fallIn} from '../../router.animation';
import { MoviedbService } from "../../services/moviedb.service";

@Component({
  selector: 'app-pelicula',
  templateUrl: './view-movie.html',
  styleUrls: ['./view-movie.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn': ''}
})
export class ViewMovieComponent implements OnInit {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  state: string='';
  @Input() items: any[] = [];
  pelicula: any = {};
  similares: Object[] = [];
  credits: Object[] = [];
  genres: any = {};
  genreId: any={};
  reviews: Object[] = [];
  video: any={};
 
  loadingPelicula: boolean;
  path: string ;

  constructor(private route:Router,private routerLink:ActivatedRoute,
    private moviedb: MoviedbService,) {

    this.loadingPelicula = true;

    this.routerLink.params.subscribe(params => {
      console.log(params);

      this.moviedb.getMovie(params['id'])
        .subscribe(pelicula => {
          console.log(pelicula);
          this.pelicula = pelicula;
          this.loadingPelicula = false;
          this.genres  = pelicula.genres;
       
         
        })
    })

    //SIMILAR
    this.routerLink.params.subscribe(params =>{

        this.moviedb.getSimilares(params['id'])
          .subscribe(similares =>{   
          this.similares = similares.results; 
          this.loadingPelicula = false;
          })
    })

      this.routerLink.params.subscribe(params =>{

            this.moviedb.getCredits(params['id'])
               .subscribe(credits =>{
               this.credits = credits.cast;
                    console.log(this.credits);
                    
          })
    })

 
    
  }
    

        getImage(){
             return `http://image.tmdb.org/t/p/w400${this.pelicula.backdrop_path}`;
        }

        verPelicula(item: any) {

          let movieId;
      
          movieId = item.id;
        
          this.route.navigate(["/movie", movieId]);

          document.getElementById("top").scrollIntoView();
        }


        

      ngOnInit(){
        document.getElementById("top").scrollIntoView();
      }
        

      aumentar(){
        document.getElementById("sipnose").style.fontSize = "25px";
      }

      diminuir(){
        document.getElementById("sipnose").style.fontSize = "15px";

      }
      restaurar(){
        document.getElementById("sipnose").style.fontSize = "20px";
      }
      constraste(){
        document.getElementById("nav").style.backgroundColor="black";
        document.getElementById("sip").style.backgroundColor = "black";
        document.getElementById("sip").style.border = "2px solid white";
        document.getElementById("infor").style.backgroundColor = "black";
        document.getElementById("infor").style.border = "2px solid white";
        document.getElementById("atores").style.backgroundColor = "black";
        document.getElementById("atores").style.border = "2px solid white";
        document.getElementById("similares").style.backgroundColor = "black";
        document.getElementById("similares").style.border = "2px solid white";
        document.getElementById("moreInfo").style.backgroundColor = "black";
        document.getElementById("moreInfo").style.border = "2px solid white";
        document.getElementById("category").style.backgroundColor = "black";
        document.getElementById("category").style.border = "2px solid white";
        document.getElementById("table").style.backgroundColor = "black";
        document.getElementById("table").style.border = "2px solid white";
        document.getElementById("table").style.color = "white";
      }
      desfazerContraste(){

      }
    
}
