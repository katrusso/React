import React from 'react'

class Task extends React.Component{
	render(){
		const {details} = this.props
		const isDone = details.isDone === true
		const buttonText = isDone ? 'Completed' : 'Mark as Complete'

		return
		(
			<ul className="list-of-tasks">
				<li className="task-data">
					<h2 className="task-name">{details.name}</h2>
					<h1 className="desc"><p>{details.desc}</p>	</h1>
{/*					<button className="task-button" onClick={() => {this.props.toggleTaskStatus(key)}}>{buttonText}</button>
*/}				</li>	
			</ul>
		)
	}
}

export default Task