import React from 'react';

function OrderToggle(props) {
    let classNames = {
        container: 'd-flex justify-content-end',
        icon: 'material-icons mb-3 mr-3 mt-0 sort-order-icon',
    };

    let styles = {
        icon: {
            transform: props.sortOrder && 'scale(1, -1)',
        },
    };

    return (
        <div className={classNames.container}>
            <i
                className={classNames.icon}
                style={styles.icon}
                onClick={() => props.changeSortOrder()}>
                sort
            </i>
        </div>
    );
}

export default OrderToggle;
