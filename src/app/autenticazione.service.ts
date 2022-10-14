import { Injectable } from '@angular/core';
import { UtentiTipo } from './tipi/tipi.data';


@Injectable({
  providedIn: 'root'
})
export class AutenticazioneService {

  loggato = false
  utente?:UtentiTipo

  constructor() { }

  login(utenteLoggato : UtentiTipo){
    this.loggato=true
    this.utente=utenteLoggato
  }

  get utenteLoggato(){
    return this.loggato
  }
}
