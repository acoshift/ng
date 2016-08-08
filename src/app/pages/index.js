import angular from 'angular'

import Home from './home/home'
import About from './about/about'

export default angular
  .module('app.pages', [])
  .component(...Home)
  .component(...About)
  .name
