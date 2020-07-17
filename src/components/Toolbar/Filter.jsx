import React, { Fragment, useState } from 'react';

const Filter = (props) => {
    const { filter, changeFilter } = props;
    const icons = ['event_note', 'event_available', 'event_busy'];

    return (
        <Fragment>
            <i className="material-icons mr-2 toolbar-icon" onClick={() => changeFilter()}>
                {icons[filter]}
            </i>
        </Fragment>
    );
};

export default Filter;
