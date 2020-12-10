import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { Item } from 'src/app/model/item';
import { Pedido } from 'src/app/model/pedido';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  @Input() entrega:boolean = false;
  @Input() itens:Array<Item> = new Array<Item>();
  @Input() cliente:Cliente = {nome: '', endereco: ''};
  
  @Output() criarListaEvent = new EventEmitter<any>();

  
  pedido:Pedido = {numero:1, valor:0, entrega: false, itens: new Array<Item>(), cliente: {} };
  listProdutos: Array<Item> = new Array<Item>();
  pedidoConcluido:boolean = false;  

  constructor() { }

  ngOnInit(): void {
    this.criarListaEvent.emit();
  }

  somaProdutos(itens: Array<Item>): number {
    let somaProdutos = 0;

      itens.forEach(item => {
        somaProdutos += item.produto.preco*item.quantidade;
    });
    return somaProdutos;
}

  onSubmit() { 
    this.pedido.cliente = this.cliente;
    this.listProdutos = this.itens.filter((item) => { return item.quantidade > 0; });
    
    this.pedido.valor = this.somaProdutos(this.listProdutos)*1.08;
    
    if(this.entrega){
      this.pedido.valor = this.pedido.valor*1.15;
    }
   
    this.pedido.valor = Number.parseFloat(this.pedido.valor.toFixed(2));
    
    if(this.pedido.valor > 0){
      this.pedidoConcluido = true;
    }

  }

}