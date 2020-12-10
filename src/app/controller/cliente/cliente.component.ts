import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  @Input() nome:string = '';
  @Input() endereco:string = '';

  cliente:Cliente = {};

  constructor() { }

  ngOnInit(): void {
  }

}
