import React, { useState } from 'react';
// Components
import TasksList from './components/TasksList';
import CreateForm from './components/CreateForm/CreateForm';
import Toolbar from './components/Toolbar/Toolbar';
// HOC
import withAPI from './hoc/withAPI';
//Tasks filters
import filters from './filters';

// TODO: separate methods outside
const App = (props) => {
    const { data: tasks = [], create, remove, update } = props;
    const [order, setOrder] = useState(true);
    const [filter, setFilter] = useState(0);

    const filtersSwitcher = () => setFilter(filter < filters.length - 1 ? filter + 1 : 0);
    const toggleOrder = () => setOrder(!order);
    const resetFilter = () => setFilter(0);

    return (
        <div className="container pt-5">
            <CreateForm handleCreate={create} resetFilter={resetFilter} />
            <Toolbar
                order={order}
                toggleOrder={toggleOrder}
                filter={filters[filter]}
                changeFilter={filtersSwitcher}
            />
            <TasksList
                tasks={[...tasks]}
                handleDelete={remove}
                handleComplete={update}
                order={order}
                filter={filters[filter].callback}
            />
        </div>
    );
};

export default withAPI(App, 'http://localhost:5000/tasks/');
