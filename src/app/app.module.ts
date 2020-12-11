import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './controller/cliente/cliente.component';
import { FormsModule } from '@angular/forms';
import { ProdutoComponent } from './controller/produto/produto.component';
import { CarrinhoComponent } from './controller/carrinho/carrinho.component';
import { PedidoComponent } from './controller/pedido/pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ProdutoComponent,
    CarrinhoComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
