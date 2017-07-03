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
        this.deleteByValue(this.items.data, item.id);
    }

    deleteByValue(obj, val) {
        for(var o in obj) {
            if(obj[o].id == val) {
                obj.splice(o, 1);
            }
        }
    }
}
