import { ItemComponent } from './item.component';

export const ItemModule = angular
    .module('item', [])
    .component('item', ItemComponent)
    .name;
