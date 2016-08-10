import angular from 'angular'
import uiRouter from 'angular-ui-router'

import Services from './services'
import Components from './components'
import Containers from './containers'

import Config from './config'
import AppComponent from './app.component'

const app = angular
  .module('app', [
    uiRouter,

    Services
  ])
  .config(Config)

;[
  AppComponent,
  ...Components,
  ...Containers
].forEach((x) => app.component(x.selector, x))

angular.bootstrap(document, ['app'], { strictDi: true })
