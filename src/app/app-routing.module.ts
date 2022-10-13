import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoDescrizioneComponent } from './auto-descrizione/auto-descrizione.component'
import { HomeComponent } from './home/home.component'
import { ListaAutoComponent } from './lista-auto/lista-auto.component'
import { LoginComponent } from './login/login.component'
import { PaginanontrovatComponent } from './paginanontrovat/paginanontrovat.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component'
import { PrezziComponent } from './prezzi/prezzi.component'
import { ContattiComponent } from './contatti/contatti.component';
import { PagamentoComponent } from './pagamento/pagamento.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"lista-auto", component:ListaAutoComponent},
  {path:"lista-auto/:autoid", component:AutoDescrizioneComponent},
  {path:"login", component:LoginComponent},
  {path:"registrazione", component:RegistrazioneComponent},
  {path:"prezzi", component:PrezziComponent},
  {path:"contatti", component:ContattiComponent},
  {path:"pagamento", component:PagamentoComponent},
  {path:"pagina-non-trovata", component: PaginanontrovatComponent},
  {path:"**", redirectTo:"pagina-non-trovata"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
