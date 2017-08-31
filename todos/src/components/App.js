import React from 'react';
import Task from './Task'
import AllTasks from './AllTasks'
import CompletedTasks from './CompletedTasks'
import sampleTasks from '../sample-tasks'

class App extends React.Component {
  constructor(){
    super()
    this.addTask = this.addTask.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.addToCompletedList = this.addToCompletedList.bind(this)
    this.removeFromCompleted = this.removeFromCompleted.bind(this)


    this.state = {
      tasks: {},
      completed: {}
    }
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
    tasks['task-${timestamp}']=task
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
  render() {
    return (
      <div className="todo-app">
        <div className="done">
          <div className="left">
              <CompletedTasks 
                tasks={this.state.tasks}
                completed={this.state.completed}
                removeFromCompleted={this.removeFromCompleted}
              />
          </div>
        </div>
        <div className="in-progress">
          <div className="middle">
            <h3>To Do</h3>
            <ul className="list-of-tasks">
{/*            Need to exclude completed tasks from this list
*/}              {
                Object
                  .keys(this.state.tasks)
                  .map(key => <Task 
                                key={key} 
                                details={this.state.tasks[key]} 
                                deleteTask={this.deleteTask} 
                                addToCompletedList={this.addToCompletedList}
                                />
                      )
              }
            </ul>
          </div>
        </div>
        <div className="new">
          <div className="right">
            <AllTasks 
              addTask={this.addTask} 
              loadSamples={this.loadSamples}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;