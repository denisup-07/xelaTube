import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class MoviedbService {

    //api key- the movie db
  private apikey: string = "f9b276a8a665a41333c2def2f632a2e4";
    //url- the movie db
  private urlMoviedb: string = "https://api.themoviedb.org/3/";

  constructor(private http: HttpClient) { }

  //peticion of the url

  getQuery(query: string) {
    const url = `https://api.themoviedb.org/3${query}&api_key=${this.apikey}&language=pt-BR&callback=JSONP_CALLBACK`;

  
    return this.http.jsonp(url, "");
  }

  //query movie url
  getQueryforMovie(query: string) {
    const url = `https://api.themoviedb.org/3${query}?api_key=${
    this.apikey
      }&language=pt-BR&callback=JSONP_CALLBACK`;

  
    return this.http.jsonp(url, "");
  }

    //to discover movies
  getDiscoverMovies() {
    return this.getQuery("/discover/movie?sort_by=popularity.desc").pipe(
      map((data: any) => data.results)
    );
  }

  //to latest movies
  getLatestMovies(){
    return this.getQuery("/movie/latest?api_key=<<api_key>>&language=en-US").pipe(
      map((data: any) => data.results)
    );
  }
  //to get genres of the movies
  getGenres(): Observable<any> {
    return this.http.get(`${this.urlMoviedb}genre/movie/list?api_key=${this.apikey}&language=pt-BR`)
  }
  
  //to search movies in the api
  getBusquedaPeliculas(termino: string) {
    return this.getQuery(
      `/search/movie?query=${termino}&sort_by=popularity.desc`
    ).pipe(map((data: any) => data.results));
  }

  //to get movie with id
  getMovie(id: string) {
    return this.getQueryforMovie(`/movie/${id}`).pipe(
      map((data: any) => data)
    );
  
  }

  //process...
 getVideos(id: string) {
    return this.getQueryforMovie(`/movie/${id}/videos`).pipe(
      map((data: any) => data)
    );
 }

  //to get similar movies of the movie selected
 getSimilares(id: string){
   return this.getQueryforMovie(`/movie/${id}/similar`).pipe(
      map((data: any) => data)
    );
 }
 //to get credits of the movie selected
 getCredits(id: string){
   return this.getQueryforMovie(`/movie/${id}/credits`).pipe(
      map((data: any) => data)
   );
 }
 //process... 
 getReviews(id: string){
   return this.getQueryforMovie(`/movie/${id}/reviews`).pipe(
      map((data: any) => data)
   );
 }

  //to get genres movies
  getGenresMovies(id:string) {
    return this.getQuery(`/discover/movie?sort_by=popularity.desc&with_genres=${id}`).pipe(
      map((data: any) => data.results)
    );
  }
}
