class ItemController {
    constructor(EventEmitter) {
        'ngInject';
        this.EventEmitter = EventEmitter;
    }

    deleteItem(item) {
        this.onDeleteItem(this.EventEmitter({item: item}));
    }
}

export default ItemController;
