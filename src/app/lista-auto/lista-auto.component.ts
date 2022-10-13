import { Component, OnInit } from '@angular/core';
import { AutoService } from '../auto.service';
import { Tipoauto } from '../tipi/tipi.data';

@Component({
  selector: 'app-lista-auto',
  templateUrl: './lista-auto.component.html',
  styleUrls: ['./lista-auto.component.css']
})
export class ListaAutoComponent implements OnInit {

  auto:Tipoauto[]=[]
  constructor(private autoService:AutoService) {
    this.auto=autoService.autoDisponibili
  }

  ngOnInit(): void {
  }

}
