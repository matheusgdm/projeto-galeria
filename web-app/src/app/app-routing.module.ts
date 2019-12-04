import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCarouselComponent } from './componentes/home/home-carousel/home-carousel.component';
import { ManterGaleriaComponent } from './componentes/galeria/manter-galeria/manter-galeria.component';
import { ExibirServicosComponent } from './componentes/exibir-servicos/exibir-servicos.component';
import { LoginComponent } from './componentes/login/login.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { FaleConoscoComponent } from './componentes/fale-conosco/fale-conosco.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';


const routes: Routes = [
  { path: 'home/home-carousel', component: HomeCarouselComponent},
  { path: 'galeria/manter-galeria', component: ManterGaleriaComponent},
  { path: 'galeria/manter-galeria/:id', component: ManterGaleriaComponent},
  { path: 'servicos', component: ExibirServicosComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeCarouselComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'fale-conosco', component: FaleConoscoComponent},
  { path: 'cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
