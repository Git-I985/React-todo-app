import React from 'react';
import CompleteCheckbox from './CompleteCheckbox.jsx';
import moment from 'moment';

const Task = (props) => {
    const { task, handleDelete, handleComplete } = props;
    const relativeDate = moment(task.date, 'D MMM, HH:mm', true).fromNow();

    const classNames = {
        li: 'task-item px-3 pt-2 mb-3',
        container: 'd-flex justify-content-between',
        text: task.completed ? 'task-text text-muted text-strikethrough mt-1 ' : 'task-text mt-1 ',
        date: 'text-muted task-date',
        controls: 'task-controls d-flex align-items-center ml-4',
        delete: 'material-icons ml-2 delete-task-btn',
    };

    return (
        <li className={classNames.li}>
            <div className={classNames.container}>
                <div>
                    <small className={classNames.date}>{relativeDate}</small>
                    <p className={classNames.text}>{task.text}</p>
                </div>
                <div className={classNames.controls}>
                    <CompleteCheckbox
                        handleComplete={() => {
                            let updated = task;
                            updated.completed = !updated.completed;
                            handleComplete(updated.id, updated);
                        }}
                        completed={task.completed}
                    />
                    <i className={classNames.delete} onClick={() => handleDelete(task.id)}>
                        close
                    </i>
                </div>
            </div>
        </li>
    );
};

export default Task;
