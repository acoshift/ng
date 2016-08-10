export default function Config ($locationProvider, $urlRouterProvider, $stateProvider) {
  'ngInject'

  $locationProvider.html5Mode(true)
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    })
    .state('about', {
      url: '/about',
      component: 'about'
    })
}
