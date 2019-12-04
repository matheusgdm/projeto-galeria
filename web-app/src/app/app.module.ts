import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeCarouselComponent } from './componentes/home/home-carousel/home-carousel.component';
import { ManterGaleriaComponent } from './componentes/galeria/manter-galeria/manter-galeria.component';
import { ConfigClassComponent } from './classes/config-class/config-class.component';

import { GaleriaService } from './servicos/galeria/galeria.service';
import { ExibirServicosComponent } from './componentes/exibir-servicos/exibir-servicos.component';
import { LoginComponent } from './componentes/login/login.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { FaleConoscoComponent } from './componentes/fale-conosco/fale-conosco.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeCarouselComponent,
    ManterGaleriaComponent,
    ConfigClassComponent,
    ExibirServicosComponent,
    LoginComponent,
    SobreComponent,
    FaleConoscoComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [GaleriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
