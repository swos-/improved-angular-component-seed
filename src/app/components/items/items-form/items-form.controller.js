class ItemsFormController {
    constructor(EventEmitter) {
        'ngInject';
        this.EventEmitter = EventEmitter;
        this.item = {};
    }

    $onChanges(changes) {
        if(changes.item) {
            this.item = Object.assign({}, this.item);
        }
    }

    onSubmit() {
        if(!this.item.title) {
            return;
        }

        this.onAddItem(this.EventEmitter({item: this.item}));
        this.item = {}
    }
}

export default ItemsFormController;
