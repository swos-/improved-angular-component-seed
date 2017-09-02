import { ItemsService } from './items.service';

const ServicesModule = angular
    .module('app.services', [
    ])
    .service('ItemsService', ItemsService)
    .name;

export default ServicesModule;
