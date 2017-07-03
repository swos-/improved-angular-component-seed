import { ItemsListComponent } from './items-list.component';
import ItemModule from './item/item.module';

export const ItemsListModule = angular
    .module('items.list', ['item'])
    .component('itemsList', ItemsListComponent)
    .name;
