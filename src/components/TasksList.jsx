import React, { useState } from 'react';
import Task from './Task/Task';

import './transition.scss'
import { TransitionGroup, CSSTransition } from "react-transition-group"

const TasksList = (props) => {
    const { order, tasks, handleDelete, handleComplete } = props;
    const sortedTasks = order ? tasks.reverse() : tasks;

    const [ stateOfIn, setstateOfIn ] = useState(false)

    return (
        <TransitionGroup component="ul" className="list-unstyled">
            {sortedTasks.map((task, index) => (
                <CSSTransition in={stateOfIn} timeout={400} classNames="opacityFade" key={index}>
                    <Task
                        key={task.id}
                        task={task}
                        handleComplete={handleComplete}
                        handleDelete={handleDelete}
                    />
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
};

export default TasksList;
