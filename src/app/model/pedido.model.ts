import { Item } from './item.model';

export interface Pedido {
    frete_tarifado:boolean,
    lista: Item[],
    formaDePagamento:string,
    valor: number
}