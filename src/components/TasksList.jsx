import React from 'react';
import Task from './Task/Task';

const TasksList = (props) => {
    let { sortOrder, tasks, handleDelete, handleComplete } = props,
        sortedTasks = sortOrder ? tasks.reverse() : tasks; //sort order

    return (
        <ul className="list-unstyled">
            {sortedTasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    handleComplete={handleComplete}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    );
};

export default TasksList;
