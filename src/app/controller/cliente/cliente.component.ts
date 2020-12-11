import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/model/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente:Cliente = {id: 1, nome: '', endereco: ''};

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitCliente(form: NgForm) {
    console.log(form.value);
  }
}
