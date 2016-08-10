import template from './app.html'

class App {
  constructor () {
    'ngInject'

    console.log('app')
  }
}

export default {
  template,
  controller: App,
  $routeConfig: [
    { path: '/', name: 'Home', component: 'home' },
    { path: '/about', name: 'About', component: 'about' }
  ]
}
