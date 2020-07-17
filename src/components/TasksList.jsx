import React, { useState } from 'react';
import Task from './Task/Task';

const TasksList = (props) => {
    const { order, tasks, handleDelete, handleComplete, filter } = props;

    const filtredTasks = tasks.filter(filter);
    const sortedTasks = order ? filtredTasks.reverse() : filtredTasks;

    return (
        <ul className="list-unstyled tasks-list">
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
