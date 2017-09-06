import React from 'react'

class CompletedTasks extends React.Component{
	constructor(){
		super()
		this.renderCompletedList = this.renderCompletedList.bind(this)

	}
	renderCompletedList(key){
		console.log('key:', key);
		const task = this.props.tasks[key]
		const removeButton = <button onClick={() => {this.props.toggleTaskStatus(key)}}>Mark as incomplete</button>
		if(task.status === 'done') {
			return <li key={key}> {task.name} {removeButton}</li>
		}
	}
	render(){	
		console.log(this.props.tasks)

		return(
			<div>
				<h3>Done</h3>
				 <ul>
				{
					Object
						.keys(this.props.tasks)
						.map(key => this.renderCompletedList(key))
				}   
				</ul>   
				 </div>
		)
	}
}

export default CompletedTasks