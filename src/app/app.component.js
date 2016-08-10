export class AppComponent {
  constructor () {
    'ngInject'

    console.log('app')
  }
}

export default {
  selector: 'app',
  template: require('./app.component.html'),
  controller: AppComponent
}
