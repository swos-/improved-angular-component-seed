import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import { AppComponent } from './app.component';

export const AppModule = angular
    .module('app', [
        'app.templates',
        uiBootstrap
    ]) // app.templates comes from the browserify transform, ngHtml2Js, and is auto-imported with bundle.js
    .component('app', AppComponent)
    .name;
