function Config ($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true)
  $urlRouterProvider.otherwise('/')
}

Config.$inject = ['$urlRouterProvider', '$locationProvider']
export default Config
