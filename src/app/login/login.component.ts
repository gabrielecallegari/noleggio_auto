import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticazioneService } from '../autenticazione.service';
import { UtentiService } from '../utenti.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errore = ""

  log?:Boolean
  constructor(private loggato : AutenticazioneService, private utenti:UtentiService, private router:Router) {
    this.log=loggato.loggato
  }

  ngOnInit(): void {
  }


  onLogin(email:HTMLInputElement, password:HTMLInputElement){
    const username = email.value
    const pwd = password.value
    let utente = this.utenti.cercaUtente(username)
    if(utente == null){
      this.errore="Utente inserito non trovato"
    }else{
      if(utente.password!= pwd){
        this.errore="Password errata"
      }else{
        this.loggato.login(utente)
        this.router.navigate(["/lista-auto"])

      }
    }
  }
}
