import angular from 'angular'

import Services from './services'
import Components from './components'
import Containers from './containers'

import Config from './config'
import AppComponent from './app.component'
import Html from './html'

angular
  .module('app', [
    'ngComponentRouter',

    Services,
    Components,
    Containers
  ])
  .value('$routerRootComponent', 'app')
  .config(Config)
  .controller('Html', Html)
  .component('app', AppComponent)
