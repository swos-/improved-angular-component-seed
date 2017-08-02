import uiRouter from 'angular-ui-router';
import { ItemsComponent } from './items.component';
import ItemsFormModule from './items-form/items-form.module';
import ItemsListModule from './items-list/items-list.module';
import TopItemsModule from './top-items/top-items.module';

export const ItemsModule = angular
    .module('app.items', [uiRouter, 'items.form', 'items.list', 'items.top-items'])
    .component('items', ItemsComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';
        $stateProvider
            .state('items', {
                url: '/items',
                component: 'items'
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;
