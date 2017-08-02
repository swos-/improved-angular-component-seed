import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import { ServicesModule } from './services/services.module';
import { AppComponent } from './app.component';
import { CommonModule } from './components/common/common.module';
import { ComponentsModule } from './components/components.module';

export const AppModule = angular
    .module('app', [ // app.templates comes from the browserify transform, ngHtml2Js, and is auto-imported with bundle.js
        'app.services',
        'app.templates',
        uiBootstrap,
        'app.common',
        'app.components',
        uiRouter
    ])
    .value('EventEmitter', payload => ({ $event: payload }))
    .component('app', AppComponent)
    .name;
