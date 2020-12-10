import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-first';

  @Input() itens: Array<Item> = new Array<Item>();
  produtos: Array<Item> = new Array<Item>();

  constructor() { }

  ngOnInit(): void {   
    this.produtos = [
      {
        produto: { id: 1,
        categoria: "Hardware",
        descricao: "Teclado Gamer",
        preco: 300.00},
        quantidade:0
      }, 
      {
        produto: { id: 2,
        categoria: "Hardware",
        descricao: "Mouse Sem Fio",
        preco: 100.00 },
        quantidade:0
      }, 
      {
        produto: { id: 3,
        categoria: "Software",
        descricao: "Super Defender",
        preco: 200.00 },
        quantidade:0
      }, 
      {
        produto: { id: 4,
        categoria: "Hardware",
        descricao: "Lenovo max",
        preco: 2200.00 },
        quantidade:0
      }, 
      {
        produto: { id: 5,
        categoria: "Hardware",
        descricao: "Predator H900",
        preco: 5900.00 },
        quantidade:0
      }, 
      {
        produto: { id: 6,
        categoria: "Acessorio",
        descricao: "Edifier B300",
        preco: 245.50 },
        quantidade:0
      }, 
      {
        produto: { id: 7,
        categoria: "Acessorio",
        descricao: "Fone max 2",
        preco: 75.30 },
        quantidade:0
      }, 
      {
        produto: { id: 8,
        categoria: "Software",
        descricao: "Boost de desempenho",
        preco: 30.00 },
        quantidade:0
      }, 
      {
        produto: { id: 9,
        categoria: "Roupa",
        descricao: "Camisa Hacktoberfest",
        preco: 35.00 },
        quantidade:0
      }, 
      {
        produto: { id: 10,
        categoria: "Roupa",
        descricao: "Bone geek",
        preco: 30.00 },
        quantidade:0
      }, 
      {
        produto: { id: 11,
        categoria: "Revistas",
        descricao: "Revista mundo logistica",
        preco: 10.00 },
        quantidade:0
      }, 
      {
        produto: { id: 12,
        categoria: "Revistas",
        descricao: "Tecnologia educacional",
        preco: 11.95 },
        quantidade:0
      }, 
      {
        produto: { id: 13,
        categoria: "Hardware",
        descricao: "Nvidia RTX 3090",
        preco: 5000.00 },
        quantidade:0
      }, 
      {
        produto: { id: 14,
        categoria: "SSD",
        descricao: "SSD kingstone 500GB",
        preco: 350.00 },
        quantidade:0
      }, 
      {
        produto: { id: 15,
        categoria: "Hardware",
        descricao: "Monitor AOC 29 Polegadas",
        preco: 900.00 },
        quantidade:0
      }
    ];    
  }

  criarLista() {   
    for (let produto of this.produtos){
      this.itens.push(produto);
    } 
  }
  
  
  
}
