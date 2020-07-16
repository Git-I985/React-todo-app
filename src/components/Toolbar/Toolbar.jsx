import React from 'react';
import OrderToggle from './OrderToggle';
import Filter from './Filter';

const Toolbar = (props) => {
    let { orderToggle } = props;
    return (
        <div className="toolbar d-flex justify-content-end mb-3 mr-3 mt-0">
            <Filter />
            <OrderToggle order={orderToggle.order} changeOrder={orderToggle.changeOrder} />
        </div>
    );
};

export default Toolbar;
