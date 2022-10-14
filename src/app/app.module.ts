import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoDescrizioneComponent } from './auto-descrizione/auto-descrizione.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { ListaAutoComponent } from './lista-auto/lista-auto.component';
import { PaginanontrovatComponent } from './paginanontrovat/paginanontrovat.component';
import { ContattiComponent } from './contatti/contatti.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { AppPaginaComponent } from './app-pagina/app-pagina.component';
import { FinePagamentoComponent } from './fine-pagamento/fine-pagamento.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoDescrizioneComponent,
    HomeComponent,
    LoginComponent,
    RegistrazioneComponent,
    ListaAutoComponent,
    PaginanontrovatComponent,
    ContattiComponent,
    PagamentoComponent,
    AppPaginaComponent,
    FinePagamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
