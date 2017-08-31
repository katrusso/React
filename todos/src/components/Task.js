import React from 'react'

class Task extends React.Component{
	constructor(){
		super()

		this.state = {
			//do I put status in here and update it by calling setState?
		}
	}
	render(){
		const {details} = this.props
		const isNotDone = details.status ==='not done'
		const buttonText = isNotDone ? 'Mark as complete' : 'Completed'

		return(
			<li className="task-data">
				<h2 className="task-name">
					{details.name}
				</h2>
				<h1 className="desc">
					<p>{details.desc}</p>	
				</h1>
				<button className="task-button" onClick={() => {this.props.addToCompletedList;details.status ==='done'}}>{buttonText}</button>
{/*
	Need to change the status when button is clicked: {details.status ==='done'}
	{this.props.addToCompletedList(key)} 
<button className="task-button" onClick={() => this.props.addToCompletedList(index)} disabled={!isNotDone}>{buttonText}</button>
<button className="delete-button" onClick={this.props.deleteTask}>Delete task</button>	
*/}	
			</li>	
			)
	}
}

export default Task