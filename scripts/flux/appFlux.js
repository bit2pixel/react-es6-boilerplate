import {Flux} from 'flummox';
import TodoActions from './actions/TodoActions.js';
import TodoStore from './stores/TodoStore.js';

class AppFlux extends Flux {
  constructor() {
    super();

    this.createActions('TodoActions', TodoActions);
    this.createStore('TodoStore', TodoStore, this);
  }
}

export default AppFlux;
