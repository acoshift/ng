import template from './app.html'

class App {
  constructor () {
    console.log('app')
  }
}

App.$inject = []
export default ['app', {
  template,
  controller: App,
  $routeConfig: [
    { path: '/', name: 'Home', component: 'home' },
    { path: '/about', name: 'About', component: 'about' }
  ]
}]
