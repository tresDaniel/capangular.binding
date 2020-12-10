import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidoComponent } from './controller/pedido/pedido.component';
import { ClienteComponent } from './controller/cliente/cliente.component';
import { ItemComponent } from './controller/item/item.component';
import { ProdutoComponent } from './controller/produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    PedidoComponent,
    ClienteComponent,
    ItemComponent,
    ProdutoComponent
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
