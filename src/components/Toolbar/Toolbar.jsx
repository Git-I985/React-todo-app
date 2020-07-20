import React from 'react';
// Components
import OrderToggle from './OrderToggle';
import Filter from './Filter';

const Toolbar = ({ order, toggleOrder, filter, changeFilter }) => (
    <div className="toolbar d-flex justify-content-end mb-3 mr-3 mt-0">
        <Filter filter={filter} changeFilter={changeFilter} />
        <OrderToggle order={order} toggleOrder={toggleOrder} />
    </div>
);

export default Toolbar;
