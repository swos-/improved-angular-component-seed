class TopItemsController {
    constructor() {
    }

    $onChanges(changes) {
        if(changes.items.isFirstChange()) {
            console.log('First change');
        }
        else {
            console.log('Not first change');
        }
    }
}

export default TopItemsController;
