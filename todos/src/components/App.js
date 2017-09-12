import React from 'react';
import Task from './Task'
import AllTasks from './AllTasks'
import TodoList from './TodoList'
import CompletedTasks from './CompletedTasks'
import sampleTasks from '../sample-tasks'
import base from '../base'

class App extends React.Component {
  constructor(){
    super()
    this.addTask = this.addTask.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.updateTask = this.updateTask.bind(this)
    this.renderCompletedList = this.renderCompletedList.bind(this)
    this.renderTodoList = this.renderTodoList.bind(this)

    this.toggleTaskStatus = this.toggleTaskStatus.bind(this)

    this.state = {
      tasks: [],
    }
  }

  // syncs component state with stored firebase db state before the component gets rendered
  //store the completed tasks in the db (currently using task list because I haven't added anything to completed)
  //but sync the todo list locally in html 5 local storage (the browser); you could also use cookies
  componentWillMount () {
    this.ref = base.syncState(`tasks`, {
      context: this,
      state: 'tasks'
    })
  }

  updateTask = (key, updatedTask) => {
    const tasks = {...this.state.tasks}
    tasks[key] = updatedTask
    this.setState({ tasks })
  }

  addTask(task){
    const tasks = {...this.state.tasks}
    const timestamp = Date.now()
    tasks[`task-${timestamp}`]=task
    this.setState({ tasks:tasks })
  }

  loadSamples(){
    this.setState({
      tasks: sampleTasks
    })
  }

  deleteTask = (key) => { 
    const tasks = {...this.state.tasks}
    tasks[key] = null;
    this.setState({ tasks:tasks})
  }

  renderCompletedList(){
    return(
      Object
      .keys(this.state.tasks)
      .filter(key => (this.state.tasks[key].isDone === true))
      .reduce((a, b) => {a[b] = this.state.tasks[b]; return a;}, {})
    )
  }

  renderTodoList(){
    return(
      Object
      .keys(this.state.tasks)
      .filter(key => (this.state.tasks[key].isDone === false))
      .reduce((a, b) => {a[b] = this.state.tasks[b]; return a;}, {})
    )
  }

  toggleTaskStatus(key){
    const tasks = {...this.state.tasks}
    const isDone = tasks[key].isDone
    isDone ? tasks[key].isDone = false : tasks[key].isDone = true
    this.setState({ tasks })
  }

  render() {
    return (
      <div className="todo-app">
        <div className="done">
          <div className="left">
              <CompletedTasks 
                tasks={this.renderCompletedList()}
                toggleTaskStatus={this.toggleTaskStatus}
              />
          </div>
        </div>
        <div className="in-progress">
          <div className="middle">
             <TodoList 
              tasks={this.renderTodoList()}
              toggleTaskStatus={this.toggleTaskStatus}
            />
          </div>
        </div>
        <div className="new">
          <div className="right">
            <AllTasks 
              tasks={this.state.tasks}
              addTask={this.addTask} 
              loadSamples={this.loadSamples}
              updateTask={this.updateTask}
              deleteTask = {this.deleteTask}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
