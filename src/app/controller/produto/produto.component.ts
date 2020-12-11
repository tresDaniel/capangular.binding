import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { Produto } from 'src/app/model/produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  @Output() carrinhoEvent = new EventEmitter<any>();

  produto:Produto = {id: 0, categoria: "", descricao: "", preco: 0, selecionado: false};
  itens:Array<Item> = new Array<Item>();
  produtos:Array<Produto> = [
    { id: 1, categoria: "Hardware", descricao: "Teclado Gamer", preco: 300.00, selecionado: false }, 
    { id: 2, categoria: "Software", descricao: "Mouse Sem Fio", preco: 100.00, selecionado: false }, 
    { id: 3, categoria: "Software", descricao: "Super Defender", preco: 200.00, selecionado: false }, 
    { id: 4, categoria: "Hardware", descricao: "Lenovo max", preco: 2200.00, selecionado: false }, 
    { id: 5, categoria: "Hardware", descricao: "Predator H900", preco: 5900.00, selecionado: false }, 
    { id: 6, categoria: "Acessório", descricao: "Edifier B300", preco: 245.50, selecionado: false }, 
    { id: 7, categoria: "Acessório", descricao: "Fone max 2", preco: 75.30, selecionado: false }, 
    { id: 8, categoria: "Software", descricao: "Boost de desempenho", preco: 30.00, selecionado: false }, 
    { id: 9, categoria: "Vestimenta", descricao: "Camisa Hacktoberfest", preco: 35.00, selecionado: false }, 
    { id: 10, categoria: "Vestimenta", descricao: "Bone geek", preco: 30.00, selecionado: false }, 
    { id: 11, categoria: "Revistas", descricao: "Revista mundo logística", preco: 10.00, selecionado: false }, 
    { id: 12, categoria: "Revistas", descricao: "Tecnologia educacional", preco: 11.95, selecionado: false }, 
    { id: 13, categoria: "Hardware", descricao: "Nvidia RTX 3090", preco: 5000.00, selecionado: false }, 
    { id: 14, categoria: "Hardware", descricao: "SSD kingstone 500GB", preco: 350.00, selecionado: false }, 
    { id: 15, categoria: "Hardware", descricao: "Monitor AOC 29 Polegadas", preco: 900.00, selecionado: false }
  ];
  produtosSelecionados:Array<Produto> = new Array<Produto>();
  
  constructor() { }

  ngOnInit(): void {

  }

  adicionarAoCarrinho(produtos: Array<Produto>) {
    produtos.map(produto => {
      if(produto.selecionado){
        this.produtosSelecionados.push(produto);
      }
    });
    this.carrinhoEvent.emit(this.produtosSelecionados);
    console.log(this.produtosSelecionados);
  }

}
