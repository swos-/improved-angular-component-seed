import { ItemsModule } from './items/items.module';

export const ComponentsModule = angular
    .module('app.components', [
        ItemsModule
    ])
    .name;
