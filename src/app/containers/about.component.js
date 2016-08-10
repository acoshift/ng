export class AboutComponent {
  constructor () {
    'ngInject'

    this.name = 'About'
  }
}

export default {
  selector: 'about',
  template: require('./about.component.html'),
  controller: AboutComponent
}
