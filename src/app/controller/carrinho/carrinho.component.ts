import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Carrinho } from 'src/app/model/carrinho';
import { Item } from 'src/app/model/item.model';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  //@Input() itens:Array<Item> = new Array<Item>();
  @Input() itens:Array<Item> = [
    {produto:{ id: 1, categoria: "Hardware", descricao: "Teclado Gamer", preco: 300.00, selecionado: false }, quantidade: 1},
    {produto:{ id: 2, categoria: "Software", descricao: "Mouse Sem Fio", preco: 100.00, selecionado: false }, quantidade: 1}, 
    {produto:{ id: 3, categoria: "Software", descricao: "Super Defender", preco: 200.00, selecionado: false }, quantidade: 1} 
  ];

  carrinho:Carrinho = {itens: Array<Item>()};
  
  constructor() { }

  ngOnInit(): void {
    
  }

  finalizarPedido(form: NgForm){
    console.log(this.itens);
  }

}
