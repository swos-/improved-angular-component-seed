import { NavComponent } from './nav.component';

export const NavModule = angular
    .module('app.nav', [])
    .component('appNav', NavComponent)
    .name;
