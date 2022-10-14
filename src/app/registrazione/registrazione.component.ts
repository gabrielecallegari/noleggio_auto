import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticazioneService } from '../autenticazione.service';
import { UtentiTipo } from '../tipi/tipi.data';
import { UtentiService } from '../utenti.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  errore = ""
  log = false
  constructor(private utentiServizio : UtentiService, private aut : AutenticazioneService, private router:Router) {
    this.log=aut.loggato
   }

  ngOnInit(): void {
  }

  onRegistration(emailRef:HTMLInputElement,passwordRef:HTMLInputElement, nomeRef:HTMLInputElement, cognomeRef:HTMLInputElement){
    const utente : UtentiTipo = {nome:nomeRef.value,cognome:cognomeRef.value,email:emailRef.value,password:passwordRef.value}
    if(utente.email==""){
      this.errore="Inserisci l'email";
      return
    }
    if(utente.password==""){
      this.errore="Inserisci la password";
      return
    }
    if(utente.nome==""){
      this.errore="Inserisci il nome";
      return
    }
    if(utente.cognome==""){
      this.errore="Inserisci il cognome";
      return
    }
    if(this.utentiServizio.cercaUtente(utente.email)){
      this.errore = "Email già resente nel nostro database, reinserisci la mail"
      emailRef.value=""
    }else{
      this.aut.login(utente)
      this.utentiServizio.addUtente(utente)
      this.router.navigate(["/"])
    }
  }
}
