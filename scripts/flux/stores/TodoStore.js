import {Store} from 'flummox';
import constants from '../../config/constants';
import Immutable from 'immutable';


class TodoStore extends Store {
  constructor(flux) {
    super();

    const TodoActions = flux.getActionIds('TodoActions');
    this.register(TodoActions.addTodo, this.addTodo);
    this.register(TodoActions.changeTodoName, this.changeTodoName);
    this.register(TodoActions.changeTodoDescription, this.changeTodoDescription);

    this.state = {
      todos: Immutable.List(),
      todo: Immutable.Map({name: '', description: ''}),
    };
  }

  getCurrentTodo() {
    return this.state.todo;
  }

  getAllTodos() {
    return this.state.todos;
  }

  addTodo(todo) {
    this.setState({todos: this.state.todos.push(todo)});
  }

  changeTodoName(name) {
    this.setState({todo: this.state.todo.update('name', name)});
  }

  changeTodoName(description) {
    this.setState({todo: this.state.todo.update('description', description)});
  }
}

export default TodoStore;
