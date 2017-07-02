export class ItemsService {
    constructor($http) {
        'ngInject';
        this.$http = $http;
        this.items = { data: []};
        this.counter = 0;
    }

    addItem(item) {
        this.counter++;
        item.id = this.counter;
        this.items.data.push(item);
    }

    deleteItem(item) {
        this.items.data.splice(item.id, 1);
    }
}
