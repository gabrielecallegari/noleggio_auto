import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AutoService } from '../auto.service';
import { Tipoauto } from '../tipi/tipi.data';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {
  @Input() myInputType: string =""
  giorni = 1
  prezzo = 0
  tipoCarta?:string
  numeroCarta?:number
  nomeCarta?:string
  dataScadenza?:string
  cvv?:number
  errore = ""
  auto?:Tipoauto
  constructor(private router : Router ,private autoService:AutoService, private route:ActivatedRoute) {
    const autoid = route.snapshot.params["autoid"]
    this.auto = autoService.cercaAuto(autoid)
    if(this.auto) this.prezzo=this.auto.prezzo
  }

  ngOnInit(): void {
  }

  onPagamento(numeroCarta:HTMLInputElement, nomeCarta:HTMLInputElement, dataScadenza:HTMLInputElement, cvv:HTMLInputElement, giorni:HTMLInputElement){
    if(numeroCarta.value===""){
      this.errore="Inserire il numero della carta"
      return
    }
    if(nomeCarta.value===""){
      this.errore="Inserire il nome presente sulla carta"
      return
    }
    if(dataScadenza.value===""){
      this.errore="Inserire la data di scadenza della carta"
      return
    }
    if(cvv.value===""){
      this.errore="Inserire il cvv della carta"
      return
    }
    if(giorni.value===""){
      this.errore="Inserire il numero di giorni di noleggio"
      return
    }
    if(this.auto && this.auto.disponibile===true){
    this.router.navigate(["/pagamento-riuscito"])
    this.autoService.setNonDisponibile(this.auto.autoid)
    }else{
      this.errore="Auto non trovata"
    }
  }

  onChange(event:any){
    const value = <HTMLInputElement>event.target
    const a = parseInt(value.value)
    this.giorni=a
    if(this.auto)
    this.prezzo = this.auto.prezzo * this.giorni
  }
}
