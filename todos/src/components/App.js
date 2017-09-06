import React from 'react';
import Task from './Task'
import AllTasks from './AllTasks'
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
    this.addToCompletedList = this.addToCompletedList.bind(this)
    this.removeFromCompleted = this.removeFromCompleted.bind(this)
    this.renderCompletedList = this.renderCompletedList.bind(this)
    this.toggleTaskStatus = this.toggleTaskStatus.bind(this)

    this.state = {
      tasks: {},
      completed: {}
    }
  }

  // syncs component state with stored firebase db state before the component gets rendered
  //store the completed tasks in the db (currently using task list because I haven't added anything to completed)
  //but sync the todo list locally in html 5 local storage (the browser); you could also use cookies
  componentWillMount() {
    this.ref = base.syncState(`tasks`, {
      context: this,
      state: 'tasks'
    })
  }

  //stop syncing changes between the component and db
  // componentWillUnmount(){
  //   base.removeBinding(this.ref);
  // }

  //runs whenever props or state changes
  componentWillUpdate(nextProps, nextState) {
  }

  updateTask = (key, updatedTask) => {
    const tasks = {...this.state.tasks}
    tasks[key] = updatedTask
    this.setState({ tasks })
  }
  addToCompletedList(key) {
    const completed = {...this.state.completed} //copy state
    completed[key] = completed[key] + 1 || 1 //incrememnt index
    this.setState({ completed }) //update state
  }
  removeFromCompleted(key) {
    const completed = {...this.state.completed}
    delete completed[key]
    this.setState({ completed })
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
    const tasks = {...this.state.tasks}

    // TODO: change status to boolean isDone
    return(
      Object
      .keys(this.state.tasks)
      .filter(key => (this.state.tasks[key].status == 'done'))
      .reduce((a, b) => {a[b] = this.state.tasks[b]; return a;}, {})
    )
  }
  toggleTaskStatus(key){
    const tasks = {...this.state.tasks}
    console.log(tasks, key)
    const status = tasks[key].status
    if (status == 'done'){ 
      tasks[key].status = 'not done'
    }
    else {
      tasks[key].status = 'done'
    }

    this.setState({ tasks })
  }

  render() {
    return (
      <div className="todo-app">
        <div className="done">
          <div className="left">
          <h3> DONE </h3>
            <ul>
              {
                Object
                  .keys(this.state.tasks)
                  .filter(key => (this.state.tasks[key].status == 'done'))
                  .map(key => 
                    <li key={key}>
                      {this.state.tasks[key].name}
                    </li>
                      )
                }
            </ul>

     
              <CompletedTasks 
                tasks={this.renderCompletedList()}
                //completed={this.state.completed}
                toggleTaskStatus={this.toggleTaskStatus}
              />
          </div>
        </div>
        <div className="in-progress">
          <div className="middle">
            <h3>To Do</h3>
              <ul className="list-of-tasks">
                  {/* Exclude completed tasks from this list */}              {
                  Object
                    .keys(this.state.tasks)
                    .map(key => 
                        (this.state.tasks)[key].status === 'not done' ? 
                          <li key={key}>
                                <Task 
                                  key={key} 
                                  details={this.state.tasks[key]} 
                                  addToCompletedList={this.addToCompletedList}
                                />
                          </li> : ""
                        )
                  }
            </ul>
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
