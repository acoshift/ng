class AuthService {
  constructor ($state) {
    this.$state = $state
  }

  signIn () {
    this.$state.go('dashboard')
  }
}

AuthService.$inject = ['$state']
export default AuthService
