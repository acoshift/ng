import angular from 'angular'

import ServiceModule from './service'

import Config from './config'
import Run from './Run'
import AppController from './app.controller'

angular
  .module('app', [
    'ui.router',

    ServiceModule
  ])
  .config(Config)
  .Run(Run)
  .controller('AppController', AppController)
