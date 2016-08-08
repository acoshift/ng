import template from './about.html'

class About {
  constructor () {
    console.log('about')
  }
}

About.$inject = []
export default ['about', {
  template,
  controller: About
}]
