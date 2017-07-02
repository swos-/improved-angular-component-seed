class ItemsFormController {
    constructor() {
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

        this.onAddItem({
            $event: {
                item: this.item
            }
        });
        this.item = {}
    }
}

export default ItemsFormController;
