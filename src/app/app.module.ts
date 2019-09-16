import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";

import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { LoadingComponent } from "./components/shared/loading/loading.component";
import {ViewMovieComponent  } from "./components/view-movie/view-movie";
import { MovieListComponent } from "./components/movie-list/movie-list";
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { CadastroModalComponent } from './cadastro-modal/cadastro-modal.component';
import { CategoriasComponent } from './categorias/categorias.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    LoadingComponent,
    ViewMovieComponent,
    MovieListComponent,
    NavbarComponent,
    PeliculaImagenPipe,
    LoginModalComponent,
    CadastroModalComponent,
    CategoriasComponent,
    
  ],
 

  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgbModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    BrowserAnimationsModule
  
  ],
  providers: [NgbModal,LoginModalComponent],

  entryComponents:[
    LoginModalComponent
  ],

  
  bootstrap: [AppComponent]
})
export class AppModule {}
