import { Component } from '@angular/core';
import { AutenticazioneService } from '../app/autenticazione.service'
import { UtentiTipo } from './tipi/tipi.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noleggio_auto';
  logged = false
  utente?:UtentiTipo = {nome:"M",cognome:"L",email:"dfkl",password:"fdkl"}
  constructor(loggato : AutenticazioneService){
    this.logged=loggato.utenteLoggato
    console.log(this.logged)
    this.utente=loggato.utente
  }
}
