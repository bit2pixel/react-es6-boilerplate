import React from 'react/addons';
import Immutable from 'immutable';

import constants from './config/constants';

import './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: Immutable.Map({
        name: '',
        description: '',
      }),
    };
  }

  componentDidMount() {
    React.findDOMNode(this.refs.todoName).focus();
  }

  render() {
    const state = this.state;
    return (
      <div>
        <header>React TODO</header>
        <div className="Todo">
          <div className="Todo__inputs">
            <label className="Todo__inputs__name__error">{this.state.error}</label>
            <input
              ref="todoName"
              type="text"
              className="Todo__inputs__name"
              value={state.todo.get('name')}
              onChange={(event) => this.handleNameChange(event)}
              onKeyDown={(event) => this.handleKeyDown(event)}
              placeholder="Add new todo..."
            />
            <input
              type="text"
              className="Todo__inputs__description"
              value={state.todo.get('description')}
              onChange={(event) => this.handleDescriptionChange(event)}
              onKeyDown={(event) => this.handleKeyDown(event)}
              placeholder="Add description..."
            />
          </div>
          <div className="Todo__itemList">
            <ul className="Todo__itemList__list">
              {this.props.todos.map(todo =>
                <li>
                  <span className="Todo_itemList__item__name">{todo.get('name')}</span>
                  <span className="Todo_itemList__item__description">{todo.get('description')}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  handleNameChange(event) {
    const todo = this.state.todo;
    this.setState({todo: todo.set('name', event.target.value)});
  }

  handleDescriptionChange(event) {
    const todo = this.state.todo;
    this.setState({todo: todo.set('description', event.target.value)});
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      if (this.state.todo.get('name').length) {
        this.props.flux.getActions('TodoActions').addTodo(this.state.todo);
        this.setState({error: '', todo: Immutable.Map()});
      } else {
        this.setState({error: 'Todo must have a name'});
      }
    }
  }
}

export default App;
