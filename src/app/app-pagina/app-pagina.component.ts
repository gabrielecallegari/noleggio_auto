import { Component, OnInit } from '@angular/core';
import { UtentiTipo } from '../tipi/tipi.data';
import { AutenticazioneService } from '../autenticazione.service';

@Component({
  selector: 'app-app-pagina',
  templateUrl: './app-pagina.component.html',
  styleUrls: ['./app-pagina.component.css']
})
export class AppPaginaComponent implements OnInit {
  title = 'noleggio_auto';
  logged = false
  utente?:UtentiTipo = {nome:"M",cognome:"L",email:"dfkl",password:"fdkl"}
  constructor(loggato : AutenticazioneService){
  }

  ngOnInit(): void {

  }

  loggedModify(logged:Event){
    console.log("Sono qui")
  }


}
