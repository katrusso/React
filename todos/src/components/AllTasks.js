import React from 'react'
import AddTaskForm from './AddTaskForm'

class AllTasks extends React.Component{
	render(){
		return(
			<div >
				<h3>New Task</h3>
				<AddTaskForm addTask = {this.props.addTask} />
				<button onClick={this.props.loadSamples}>Load Sample Tasks</button>
			</div>
			)
	}
}

export default AllTasks