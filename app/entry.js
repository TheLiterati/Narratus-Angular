'use strict';

// require('./scss/main.scss');

const path = require('path');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');
const angular = require('angular');
const ngTouch = require('angular-touch');
const ngAnimate = require('angular-animate');

require('@uirouter/angularjs');
require('angular-ui-bootstrap');

const narratus = angular.module('narratus', ['ui.router', 'ngTouch', 'ngAnimate', 'ui.bootstrap']);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach(path => narratus.config(context(path)));

context = require.context('./view/', true, /\.js$/);
context.keys().forEach(key => narratus.controller(pascalcase(path.basename(key, 'js')), context(key)));

context = require.context('./service/', true, /\.js$/);
context.keys().forEach(key => narratus.service(camelcase(path.basename(key, 'js')), context(key)));

context = require.context('./component/', true, /\.js$/);
context.keys().forEach(key => narratus.component(camelcase(path.basename(key, 'js')), context(key)));
