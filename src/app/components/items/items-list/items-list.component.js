import templateUrl from './items-list.html';
import ItemsListController from './items-list.controller';

export const ItemsListComponent = {
    bindings: {
        items: '<'
    },
    templateUrl,
    controller: ItemsListController
}
