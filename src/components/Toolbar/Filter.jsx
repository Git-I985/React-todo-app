import React, { useState } from 'react';

const Filter = (props) => {
    const { filter, changeFilter } = props;
    const icons = ['event_note', 'event_available', 'event_busy'];

    return (
        <i className="material-icons mr-2 toolbar-icon" onClick={() => changeFilter()}>
            {icons[filter]}
        </i>
    );
};

export default Filter;
