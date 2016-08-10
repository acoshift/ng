export class MenuComponent {
  constructor () {
    'ngInject'
  }
}

export default {
  selector: 'menu',
  template: require('./menu.component.html'),
  controller: MenuComponent
}
