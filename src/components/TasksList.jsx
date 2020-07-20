import React from 'react';
import Task from './Task/Task';

const TasksList = (props) => {
    const { tasks, handleDelete, handleComplete, order, filter } = props;

    const filtredTasks = tasks.filter(filter);
    const sortedTasks = order ? filtredTasks.reverse() : filtredTasks;

    // const isItemLastInArray = (item, arr, field = 'id') =>
    //     item[field] === arr[arr.length - 1][field];

    if (sortedTasks.length) {
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
    }
    return <p className="text-center text-muted">There aren't tasks</p>;
};

export default TasksList;
