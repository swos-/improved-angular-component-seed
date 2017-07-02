class ItemsController {
    constructor(ItemsService) {
        'ngInject';
        this.ItemsService = ItemsService;
        this.items = this.ItemsService.items.data;
    }

    addItem($event) {
        var item = $event.item;
        this.ItemsService.addItem(item);
    }

    deleteItem($event) {
        var item = $event.item;
        this.ItemsService.deleteItem(item);
    }
}

export default ItemsController;
