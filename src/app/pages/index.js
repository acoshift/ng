import angular from 'angular'

import Config from './config'
import Home from './home/home'
import About from './about/about'

export default angular
  .module('app.pages', [])
  .config(Config)
  .component(...Home)
  .component(...About)
  .name
