import React from 'react';

class OrderToggle extends React.Component {
    render() {
        let { sortOrder, changeSortOrder } = this.props;
        let classNames = {
            container: 'd-flex justify-content-end',
            icon: 'material-icons mb-3 mr-3 mt-0 sort-order-icon',
        };

        return (
            <div className={classNames.container}>
                <i
                    className={classNames.icon}
                    onClick={() => changeSortOrder()}
                    style={{
                        transform: sortOrder && 'scale(1, -1)', //rotate icon
                    }}>
                    sort
                </i>
            </div>
        );
    }
}

export default OrderToggle;
