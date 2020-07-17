import React, { useState } from 'react';
import Task from './Task/Task';

const TasksList = (props) => {
    const { order, tasks, handleDelete, handleComplete, filter } = props;

    const filters = [(task) => true, (task) => task.completed, (task) => !task.completed];

    const filtredTasks = tasks.filter(filters[filter]);
    const sortedTasks = order ? filtredTasks.reverse() : filtredTasks;

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
