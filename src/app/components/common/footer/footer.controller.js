class FooterController {
    constructor(ItemsService) {
        'ngInject';
        this.ItemsService = ItemsService;
        this.footerText = 'Angular App Footer';
        this.items = this.ItemsService.items.data;
    }
}

export default FooterController;
