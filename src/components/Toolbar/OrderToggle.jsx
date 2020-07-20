import React from 'react';

const OrderToggle = ({ order, toggleOrder }) => (
    <i
        className="material-icons toolbar-icon"
        style={{
            transform: order && 'scale(1, -1)',
        }}
        onClick={toggleOrder}>
        sort
    </i>
);

export default OrderToggle;
