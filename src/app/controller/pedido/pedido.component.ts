import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormaDePagamento } from 'src/app/model/formaDePagamento';
import { Pedido } from 'src/app/model/pedido.model';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  formasDePagamento:Array<FormaDePagamento> = [{nome: 'cartao', descricao:'Cartão de Crédito'}, {nome: 'boleto', descricao:'Boleto Bancário'}];

  pedido:Pedido = {
    frete_tarifado: false,
    lista: [{produto:{ id: 1, categoria: "Hardware", descricao: "Teclado Gamer", preco: 300.00, selecionado: false }, quantidade: 1},
    {produto:{ id: 2, categoria: "Software", descricao: "Mouse Sem Fio", preco: 100.00, selecionado: false }, quantidade: 1}, 
    {produto:{ id: 3, categoria: "Software", descricao: "Super Defender", preco: 200.00, selecionado: false }, quantidade: 1}],
    formaDePagamento:'',
    valor: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  finalizarCompra() {
    this.pedido.lista.map(item => {
      if(item.quantidade > 0){
        this.pedido.valor += item.produto.preco*1.08;
      }
    });

    if(this.pedido.frete_tarifado){
      this.pedido.valor = this.pedido.valor*1.15;
    }

    this.pedido.valor = Number.parseFloat(this.pedido.valor.toFixed(2));
    console.log(this.pedido.valor);
  }

}
