import angular from 'angular'

angular
  .module('app')
  .controller('AppController', AppController)

AppController.$inject = []
function AppController () {
  this.title = 'ng'
  this.description = ''
}
