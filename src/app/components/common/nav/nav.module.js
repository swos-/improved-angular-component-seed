import { NavComponent } from './nav.component';

export const NavModule = angular
    .module('app.common.nav', [])
    .component('appNav', NavComponent)
    .name;
