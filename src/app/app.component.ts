import { Component, OnInit } from "@angular/core";
import { MoviedbService } from "./services/moviedb.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from './login-modal/login-modal.component';
import {moveIn, fallIn} from './router.animation';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn': ''}
})
export class AppComponent{
  state: string='';


  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);


  constructor(public _ms: MoviedbService,private modalService: NgbModal) {
    this._ms.getDiscoverMovies().subscribe(data => console.log(data));
  }

  openModal() {
    this.modalService.open(LoginModalComponent);
  
  }
  

      
     
    
}
