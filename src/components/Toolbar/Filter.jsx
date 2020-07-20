import React, { Fragment } from 'react';

const Filter = (props) => {
    const { filter, changeFilter } = props;
    return (
        <Fragment>
            <i
                className="material-icons mr-2 toolbar-icon"
                title={filter.name}
                onClick={() => changeFilter()}>
                {filter.icon}
            </i>
        </Fragment>
    );
};

export default Filter;
