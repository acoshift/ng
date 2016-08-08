function Config ($locationProvider) {
  $locationProvider.html5Mode(true)
}

Config.$inject = ['$locationProvider']
export default Config
