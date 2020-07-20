import React from 'react';
import moment from 'moment';
// Components
import CompleteCheckbox from './CompleteCheckbox.jsx';

import classNames from './classNames';

const Task = (props) => {
    const { task, handleDelete, handleComplete } = props;
    const relativeDate = moment(task.date, 'D MMM, HH:mm', true).fromNow();

    const completeHandler = (task) =>
        handleComplete(task.id, { ...task, completed: !task.completed });

    return (
        <li className={classNames.li}>
            <div className={classNames.container}>
                <div className={classNames.task.info}>
                    <small className={classNames.task.date}>{relativeDate}</small>
                    <p className={task.completed ? classNames.task.complete : classNames.task.text}>
                        {task.text}
                    </p>
                </div>
                {/* Controls */}
                <div className={classNames.task.controls}>
                    <CompleteCheckbox
                        completed={task.completed}
                        handleComplete={() => completeHandler(task)}
                    />
                    <i className={classNames.task.delete} onClick={() => handleDelete(task.id)}>
                        close
                    </i>
                </div>
            </div>
        </li>
    );
};

export default Task;
