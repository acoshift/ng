import angular from 'angular'

import Services from './services'
import Components from './components'

import Config from './config'
import Run from './run'
import AppController from './app.controller'

angular
  .module('app', [
    'ui.router',

    Services,
    Components
  ])
  .config(Config)
  .run(Run)
  .controller('AppController', AppController)
