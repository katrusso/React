import React from 'react'
import AddTaskForm from './AddTaskForm'

class AllTasks extends React.Component{
	constructor(){
		super()
		this.renderTasks = this.renderTasks.bind(this) //list all the tasks that have been entered
		this.handleChange = this.handleChange.bind(this); //if user edits the data in an existing task, update props

	}
	handleChange(e, key){
		const task = this.props.tasks[key]
		const updatedTask = {...task, [e.target.name]: e.target.value} //make a copy of the task and update its data
		this.props.updateTask(key, updatedTask)
	}

	renderTasks(key){
		const task = this.props.tasks[key]
		return(
			<div className="task-data">
				<div className="task-edit" key={key}>
					<input type="text" name="name" value={task.name} placeholder="Task Name" onChange={(e) => this.handleChange(e, key)} />
					<textarea type="text" name="desc" value={task.desc}  placeholder="Task Desc" onChange={(e) => this.handleChange(e, key)} />
					<select type="text" name="status" value={task.status} placeholder="Task Status" onChange={(e) => this.handleChange(e, key)} >
						<option value="not done">Incomplete</option>
						<option value="done">Done!</option>
					</select>
					<button onClick={() => this.props.deleteTask(key)}>Remove Task</button>
				</div>
			</div>
			)
	}
	render(){
		return(
			<div >
				<h3>New Task</h3>
				<AddTaskForm addTask = {this.props.addTask} />
				<button onClick={this.props.loadSamples}>Load Sample Tasks</button>
			{/* list all the tasks that have been entered 		*/}		
				{
					Object
						.keys(this.props.tasks)
						.map(this.renderTasks)
				} 
			</div>
			)
	}
}

export default AllTasks