import React from 'react';

const CompleteCheckbox = ({ completed, handleComplete }) => (
    <label className="checkbox bounce">
        <input type="checkbox" checked={completed} onChange={handleComplete} />
        <svg viewBox="0 0 21 21">
            <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
        </svg>
    </label>
);

export default CompleteCheckbox;
