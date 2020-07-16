import React from 'react';

const OrderToggle = (props) => {
    const { order, changeOrder } = props;

    return (
        <i
            className="material-icons toolbar-icon"
            style={{
                transform: order && 'scale(1, -1)',
            }}
            onClick={() => changeOrder()}>
            sort
        </i>
    );
};

export default OrderToggle;
