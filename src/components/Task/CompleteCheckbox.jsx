import React, { Component } from 'react';

class CompleteCheckbox extends Component {
    render() {
        let { task, handleCompleteTask } = this.props;
        return (
            <React.Fragment>
                <label className="checkbox bounce">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleCompleteTask(task.id)}
                    />
                    <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                    </svg>
                </label>
            </React.Fragment>
        );
    }
}

export default CompleteCheckbox;
