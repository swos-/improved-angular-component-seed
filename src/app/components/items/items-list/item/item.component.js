import templateUrl from './item.html';
import ItemController from './item.controller';

export const ItemComponent = {
    bindings: {
        i: '<',
        onDeleteItem: '&'
    },
    templateUrl,
    controller: ItemController
};
