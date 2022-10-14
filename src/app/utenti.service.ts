import { Injectable } from '@angular/core';
import { UtentiTipo } from './tipi/tipi.data';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  arrayUtenti:UtentiTipo[] = [
    {nome:"Gabriele",cognome:"Callegari",email:"gabricalle@gmail.com",password:"1234"},
    {nome:"A",cognome:"A",email:"a@gmail.com",password:"A"},
    {nome:"B",cognome:"B",email:"b@gmail.com",password:"A"},
    {nome:"C",cognome:"C",email:"c@gmail.com",password:"A"},
    {nome:"D",cognome:"D",email:"d@gmail.com",password:"A"},
    {nome:"E",cognome:"E",email:"e@gmail.com",password:"A"},
    {nome:"F",cognome:"F",email:"f@gmail.com",password:"A"},
    {nome:"G",cognome:"G",email:"g@gmail.com",password:"A"},
    {nome:"H",cognome:"H",email:"h@gmail.com",password:"A"},
    {nome:"I",cognome:"I",email:"i@gmail.com",password:"A"},
    {nome:"J",cognome:"J",email:"j@gmail.com",password:"A"},
  ]
  constructor() { }

  cercaUtente(email:string){
    return this.arrayUtenti?.find(us => us.email===email)
  }

  addUtente(utente:UtentiTipo){
    this.arrayUtenti.push(utente)
  }


}
