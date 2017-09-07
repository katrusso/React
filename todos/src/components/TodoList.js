import React from 'react'

class TodoList extends React.Component{
	constructor(){
		super()
		this.renderTodoList = this.renderTodoList.bind(this)

	}
	renderTodoList(key){
		console.log('key:', key);
		const task = this.props.tasks[key]
		const markAsCompleteButton = <button onClick={() => {this.props.toggleTaskStatus(key)}}>Mark as complete</button>
		if(task.status === 'not done') {
			return <li key={key}> {task.name} {markAsCompleteButton}</li>
		}
	}
	render(){	
		console.log(this.props.tasks)

		return(
			<div>
				<h3>To Do</h3>
				 <ul>
				{
					Object
						.keys(this.props.tasks)
						.map(key => this.renderTodoList(key))
				}   
				</ul>   
				 </div>
			)
	}
}

export default TodoList