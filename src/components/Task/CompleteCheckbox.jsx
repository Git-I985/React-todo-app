import React from 'react';

const CompleteCheckbox = (props) => {
    let { completed, handleComplete } = props;
    return (
        <React.Fragment>
            <label className="checkbox bounce">
                <input type="checkbox" checked={completed} onChange={() => handleComplete()} />
                <svg viewBox="0 0 21 21">
                    <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                </svg>
            </label>
        </React.Fragment>
    );
};

export default CompleteCheckbox;
