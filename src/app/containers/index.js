import angular from 'angular'

import Home from './home'
import About from './about'

export default angular
  .module('app.containers', [])
  .component('home', Home)
  .component('about', About)
  .name
