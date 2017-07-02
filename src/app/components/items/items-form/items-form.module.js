import { ItemsFormComponent } from './items-form.component';

export const ItemsFormModule = angular
    .module('items.form', [])
    .component('itemsForm', ItemsFormComponent)
    .name;
