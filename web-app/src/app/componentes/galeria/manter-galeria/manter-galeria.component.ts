import { ConfigClass } from '../../../classes/config-class';
import { Component, OnInit } from '@angular/core';

import { GaleriaService } from '../../../servicos/galeria/galeria.service';

@Component({
  selector: 'app-manter-galeria',
  templateUrl: './manter-galeria.component.html',
  styleUrls: ['./manter-galeria.component.css']
})
export class ManterGaleriaComponent implements OnInit {

  ixibirListagemForm: boolean = false;
  listImgGaleria: any;

  server: String = ConfigClass.getUrlApi().toString();

  constructor(private galeriaService: GaleriaService) { }

  ngOnInit() {
    this.listar();
    }

  listar(): void {
    this.galeriaService.getTodos().subscribe(resp => {
      this.listImgGaleria = resp.body.dados.map(function(objeto) {
        return { id_galeria: objeto.id_galeia,
        titulo: objeto.titulo,
      caminho: this + (objeto.caminho ? objeto.caminho.substring(1) : objeto.caminho)
    };
      }, this.server);
      console.log('resposta: ', resp);
      console.log('listImgGaleria: ', this.listImgGaleria);
    });
  }

}
