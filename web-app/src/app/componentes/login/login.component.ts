import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  entrarSistema() {
    this.router.navigate(['galeria/manter-galeria']);
  }

  entrarCadastro() {
    this.router.navigate(['cadastro']);
  }

}
