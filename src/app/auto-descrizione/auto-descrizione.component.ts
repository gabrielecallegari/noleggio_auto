import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AutenticazioneService } from '../autenticazione.service';
import { AutoService } from '../auto.service';
import { Tipoauto } from '../tipi/tipi.data'

@Component({
  selector: 'app-auto-descrizione',
  templateUrl: './auto-descrizione.component.html',
  styleUrls: ['./auto-descrizione.component.css']
})
export class AutoDescrizioneComponent implements OnInit {
  auto?:Tipoauto
  logged?:boolean
  link = ""
  constructor( private autoService:AutoService, private route : ActivatedRoute, private router:Router, private aut:AutenticazioneService) {
    console.log("Sono qui")
    const { autoid } = route?.snapshot?.params ?? {}
    this.auto=autoService.cercaAuto(autoid)
    this.logged=aut.loggato
    if(this.auto) this.link=this.auto.immagine
  }

  ngOnInit(): void {
  }
}
