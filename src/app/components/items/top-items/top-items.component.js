import templateUrl from './top-items.html';
import TopItemsController from './top-items.controller';

export const TopItemsComponent = {
    bindings: {
        items: '<'
    },
    templateUrl,
    controller: TopItemsController
};
