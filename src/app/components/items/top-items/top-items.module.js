import { TopItemsComponent } from './top-items.component';

export const TopItemsModuule = angular
    .module('items.top-items', [])
    .component('topItems', TopItemsComponent)
    .name;
