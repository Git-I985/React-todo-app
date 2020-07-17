import React from 'react';
import OrderToggle from './OrderToggle';
import Filter from './Filter';

const Toolbar = (props) => {
    const { orderToggle, filter } = props;

    return (
        <div className="toolbar d-flex justify-content-end mb-3 mr-3 mt-0">
            <Filter filter={filter.filter} changeFilter={filter.changeFilter} />
            <OrderToggle order={orderToggle.order} changeOrder={orderToggle.changeOrder} />
        </div>
    );
};

export default Toolbar;
