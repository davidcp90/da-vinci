import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMaterial from 'angular-material';
import registerDirectives from './directives';
if (ON_TEST) {
  require('angular-mocks/angular-mocks');
}
require('angular-material/angular-material.css');
const ngModule = angular.module('davinci', ['ngMaterial']);

registerDirectives(ngModule);
