import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrinhoComponent } from './controller/carrinho/carrinho.component';
import { ClienteComponent } from './controller/cliente/cliente.component';
import { PedidoComponent } from './controller/pedido/pedido.component';
import { ProdutoComponent } from './controller/produto/produto.component';

const routes: Routes = [
  { path: '', redirectTo: '/cliente', pathMatch: 'full' },
  { path: 'cliente', component: ClienteComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'pedido', component: PedidoComponent  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
