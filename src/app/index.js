import angular from 'angular'

import Services from './services'
import Components from './components'
import Pages from './pages'

import Config from './config'
import App from './app'
import Html from './html'

angular
  .module('app', [
    'ngComponentRouter',
    // 'ui.router',

    Services,
    Components,
    Pages
  ])
  .value('$routerRootComponent', 'app')
  .config(Config)
  .controller(...Html)
  .component(...App)
