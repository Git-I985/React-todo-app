import React, { Fragment } from 'react';

const OrderToggle = (props) => {
    let { order, changeOrder } = props;

    return (
        <Fragment>
            <i
                className="material-icons toolbar-icon"
                style={{
                    transform: order && 'scale(1, -1)',
                }}
                onClick={() => changeOrder()}>
                sort
            </i>
        </Fragment>
    );
};

export default OrderToggle;
