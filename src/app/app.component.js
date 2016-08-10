import template from './app.component.html'

class AppComponent {
  constructor () {
    'ngInject'

    console.log('app')
  }
}

export default {
  template,
  controller: AppComponent,
  $routeConfig: [
    { path: '/', name: 'Home', component: 'home' },
    { path: '/about', name: 'About', component: 'about' }
  ]
}
