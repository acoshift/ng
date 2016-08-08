import template from './about.html'

class About {
  constructor () {
    'ngInject'

    this.name = 'About'
  }
}

export default ['about', {
  template,
  controller: About
}]
