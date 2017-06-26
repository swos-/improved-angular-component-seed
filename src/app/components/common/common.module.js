import { NavModule } from './nav/nav.module';

export const CommonModule = angular
    .module('app.common', [
        NavModule
    ])
    .name;
