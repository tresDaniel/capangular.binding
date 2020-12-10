import { Item } from './item';
import { Cliente } from './cliente';

export interface Pedido {
    numero: number,
    valor: number,
    itens: Array<Item>,
    entrega: boolean,
    cliente: Cliente
  }
  