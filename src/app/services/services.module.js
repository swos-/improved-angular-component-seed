import { ItemsService } from './items.service';

export const ServicesModule = angular
    .module('app.services', [
    ])
    .service('ItemsService', ItemsService)
    .name;
