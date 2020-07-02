import React from 'react';
import Task from './Task/Task';

class TaskList extends React.Component {
    render() {
        let { reverse, tasks, handleDeleteTask, handleCompleteTask } = this.props;
        let sortedTasks = reverse ? tasks.reverse() : tasks; //sort order

        return (
            <ul className="list-unstyled">
                {sortedTasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        handleCompleteTask={handleCompleteTask}
                        handleDeleteTask={handleDeleteTask}
                    />
                ))}
            </ul>
        );
    }
}

export default TaskList;
