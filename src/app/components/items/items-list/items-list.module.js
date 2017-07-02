import { ItemsListComponent } from './items-list.component';

export const ItemsListModule = angular
    .module('items.list', [])
    .component('itemsList', ItemsListComponent)
    .name;
