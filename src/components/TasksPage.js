import React from 'react'
import TaskList from './TaskList'

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed']

class TasksPage extends React.Component {
    renderTaskLisks() {
        const {tasks} = this.props
        return TASK_STATUSES.map(status => {
            const statusTasks = tasks.filter(task => task.status === status)
            return <TaskList key={status} tasks={statusTasks} status={status}/>
        })
    }

    render() {
        return (
            <div className="tasks">
                <div className="task-list">
                    {this.renderTaskLisks()}
                </div>
            </div>
        )
    }
}

export default TasksPage