import angular from 'angular'

import HomeComponent from './home'
import AboutComponent from './about'

export default angular
  .module('app.containers', [])
  .component('home', HomeComponent)
  .component('about', AboutComponent)
  .name
