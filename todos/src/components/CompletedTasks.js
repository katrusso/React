import React from 'react'

class CompletedTasks extends React.Component{
	constructor(){
		super()
		this.renderCompletedList = this.renderCompletedList.bind(this)
	}
	renderCompletedList(key){
		const task = this.props.tasks[key]
		const removeButton = <button onClick={() => this.props.removeFromCompleted(key)}>Mark as incomplete</button>
		if(task.status === 'done') {
			return <li key={key}> {task? task.name : 'task'} is incomplete {removeButton}</li>
		}
		return(
			<li key={key}>
				<p> hello </p>
				{task.name} {removeButton}
			</li>
			)
	}
	render(){	
		const completedIds = Object.keys(this.props.completed)		
		return(
			<div>
				<h3>Done</h3>
				{completedIds.map(this.renderCompletedList)}
            </div>
		)
	}
}

export default CompletedTasks