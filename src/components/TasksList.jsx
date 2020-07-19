import React from 'react';
import Task from './Task/Task';

const TasksList = (props) => {
    const { order, tasks, handleDelete, handleComplete, filter, newItem } = props;

    const filtredTasks = tasks.filter(filter);
    const sortedTasks = order ? filtredTasks.reverse() : filtredTasks;

    const isItemLastInArray = (item, arr, field = 'id') =>
        item[field] === arr[arr.length - 1][field];

    return (
        <ul className="list-unstyled tasks-list">
            {sortedTasks.length ? (
                sortedTasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        handleComplete={handleComplete}
                        handleDelete={handleDelete}
                        isRecent={newItem && isItemLastInArray(task, tasks)}
                    />
                ))
            ) : (
                <p className="text-center text-muted">There aren't tasks</p>
            )}
        </ul>
    );
};

export default TasksList;
