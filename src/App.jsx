import React, { useState } from 'react';
// Components
import TasksList from './components/TasksList';
import CreateForm from './components/CreateForm';
import Toolbar from './components/Toolbar/Toolbar';
// HOC
import withAPI from './hoc/withAPI';

// TODO: separate methods outside
const App = (props) => {
    const { data: tasks = [], create, remove, update } = props;
    const [order, setOrder] = useState(true);
    const [filter, setFilter] = useState(0);

    const filters = [(task) => true, (task) => task.completed, (task) => !task.completed];

    return (
        <div className="container pt-5">
            <CreateForm handleCreate={create} />
            <Toolbar
                orderToggle={{
                    order,
                    changeOrder: () => setOrder(!order),
                }}
                filter={{
                    filter,
                    changeFilter: () => setFilter(filter < filters.length - 1 ? filter + 1 : 0),
                }}
            />
            <TasksList
                tasks={[...tasks]}
                handleDelete={remove}
                handleComplete={update}
                order={order}
                filter={filters[filter]}
            />
        </div>
    );
};

export default withAPI(App, 'http://localhost:5000/tasks/');
