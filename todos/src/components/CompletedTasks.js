import React from 'react'

class CompletedTasks extends React.Component{
	constructor(){
		super()
		this.renderCompletedList = this.renderCompletedList.bind(this)

	}
	renderCompletedList(key){
		const task = this.props.tasks[key]
		const removeButton = <button onClick={() => {this.props.removeFromCompleted(key); task.status = 'not done'}}>Mark as incomplete</button>
		if(task.status === 'done') {
			return <li key={key}> {task.name} {removeButton}</li>
		}
	}
	render(){	
		return(
			<div>
				<h3>Done</h3>
				 <ul>
				{
					Object
						.keys(this.props.tasks)
						.map(this.renderCompletedList)
				}   
				</ul>   
				 </div>
		)
	}
}

export default CompletedTasks