import angular from 'angular'

import AuthService from './auth.service'

const module = 'app.services'

angular
  .module(module, [])
  .service('AuthService', AuthService)

export default module
