import { FooterComponent } from './footer.component';

export const FooterModule = angular
    .module('app.common.footer', [])
    .component('appFooter', FooterComponent)
    .name;
