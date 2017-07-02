import templateUrl from './items-form.html';
import ItemsFormController from './items-form.controller';

export const ItemsFormComponent = {
    bindings: {
        onAddItem: '&'
    },
    templateUrl,
    controller: ItemsFormController
}
