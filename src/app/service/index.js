import angular from 'angular'

import AuthService from './auth.service'

const module = 'app.service'

angular
  .module('module')
  .service('AuthService', AuthService)

export default module
