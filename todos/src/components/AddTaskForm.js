import React from 'react'

class AddTaskForm extends React.Component{
	createTask(event){
		event.preventDefault()
		const task = {
			name: this.name.value,
			desc: this.desc.value,
			status: this.status.value,
		}
		console.log(task)
		this.props.addTask(task)
		this.taskForm.reset()
	}
	render(){
		return(
			<form ref={(input) => this.taskForm = input} className="task-edit" onSubmit={(e) => this.createTask(e)}>
				<input ref={(input) => this.name = input} type="text" placeholder="Task Name" />
				<textarea ref={(input) => this.desc = input} placeholder="Task Desc" />
				<select ref={(input) => this.status = input}>
					<option value="not done">Incomplete</option>
					<option value="done">Done!</option>
				</select>
				<button type="submit">+ Add Task</button>
			</form>
			)
	}
}

export default AddTaskForm