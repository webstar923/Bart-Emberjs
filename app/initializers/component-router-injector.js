// app/initializers/component-router-injector.js
export function initialize(application) {
  // Injects all Ember components with a router object:
  application.inject('component', 'router', 'router:main', 'cookie');
}

export default {
  name: 'component-router-injector',
  initialize: initialize
};