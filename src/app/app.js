import angular from 'angular'

import ServiceModule from './service'

import Config from './config'
import Run from './run'
import AppController from './app.controller'

angular
  .module('app', [
    'ui.router',

    ServiceModule
  ])
  .config(Config)
  .run(Run)
  .controller('AppController', AppController)
