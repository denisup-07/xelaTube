import { Component, OnInit, Input} from '@angular/core';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {moveIn, fallIn} from '../router.animation';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],
  template: `
  <div class="modal-header" style='background-color: rgb(209, 47, 47);'>
  <h2 class="modal-title" style='margin-left:170px;'>Login</h2>
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')" style='color:white'>
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
  <form role="form">
  <div class="form-group">
    <input type="email" class="form-control" placeholder="Email" style='width:300px;margin-left:50px;'/><br>
    <input type="password" class="form-control" placeholder="Senha" style='width:300px;margin-left:50px;' />
  </div>
</form>
  </div>
  <div class="modal-footer">
  <button class="btn" style='margin-right:150px;background-color:green;color:white;font-size:20px;' >Entrar</button>
    <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Fechar</button>
  </div>
`
})
export class LoginModalComponent implements OnInit {


  @Input() name;

  constructor(public activeModal: NgbActiveModal) {


   }

   

  ngOnInit() {
  }

}
