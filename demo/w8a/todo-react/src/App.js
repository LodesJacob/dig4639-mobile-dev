import React from 'react';
import './App.css';
import todoList from './todoList.json';

function TodoItem(props) {
  return <p className='card'>{props.content}<input type="button" value="remove" onClick={() => console.log(props)} /></p>
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: todoList,
      showOnlyUncompletedTasks: false
    }
  }
  addTask() {
    let content = this.refs.taskContent.value
    let priority = this.refs.taskPriority.value
    if (content) {
      let newTask = {
        content: content,
        priority: parseInt(priority),
        completed: false
      }
      let currentList = this.state.todoList
      currentList.push(newTask)
      this.setState({todoList:currentList})
    }
  }
  removeTask(key) {
    let newList = this.state.todoList.filter((task) => (task.key !== key))
  }
  render() {
    return (
      <>
      <div className="inputTask">
        <input type="text" ref="taskContent" />
        <select ref="taskPriority">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <input type="button" value="Add Task" onClick={() => this.addTask()}/>
        <input type="checkbox" ref="showOnlyUncompletedTasks"
          onChange={(e) => this.setState({showOnlyUncompletedTasks: e.target.checked})}
          id="showOnlyUncompletedTasks" name="showOnlyUncompletedTasks" value="completed" />
        <label htmlFor="showOnlyUncompletedTasks"> Show only uncompleted tasks</label>
      </div>
      {(this.state.showOnlyUncompletedTasks ? this.state.todoList.filter((v) => !v.completed) : this.state.todoList).map(
        (v, i) => <TodoItem priority={v.priority} key={i}
        content={v.content} completed={v.completed}/>)}
    </>
    )
  }
}

export default App;
