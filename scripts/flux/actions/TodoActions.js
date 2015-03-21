import {Actions} from 'flummox';
import constants from '../../config/constants';

class TodoActions extends Actions {
  addTodo(todo) {
    return todo;
  }

  changeTodoName(name) {
    return name;
  }

  changeTodoDescription(description) {
    return description;
  }
}

export default TodoActions;
