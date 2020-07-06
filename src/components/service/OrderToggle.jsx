import React from 'react';

const OrderToggle = (props) => {
    let { sortOrder, changeSortOrder } = props;

    let classNames = {
        container: 'd-flex justify-content-end',
        icon: 'material-icons mb-3 mr-3 mt-0 sort-order-icon',
    };

    let styles = {
        icon: {
            transform: sortOrder && 'scale(1, -1)',
        },
    };

    return (
        <div className={classNames.container}>
            <i className={classNames.icon} style={styles.icon} onClick={() => changeSortOrder()}>
                sort
            </i>
        </div>
    );
};

export default OrderToggle;
