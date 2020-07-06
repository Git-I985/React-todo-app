import React, { useState } from 'react';
import TasksList from './components/TasksList.jsx';
import CreateTask from './components/CreateTask.jsx';
import OrderToggle from './components/service/OrderToggle.jsx';
import withAPI from './hoc/withAPI';

const App = (props) => {
    const [sortOrder, setSortOrder] = useState(true),
        [theme, setTheme] = useState('dark'),
        { data = [], create, remove, update } = props;

    return (
        <div className="container pt-5">
            <CreateTask handleCreate={create} />
            <OrderToggle changeSortOrder={() => setSortOrder(!sortOrder)} sortOrder={sortOrder} />
            <TasksList
                tasks={[...data]}
                handleDelete={remove}
                handleComplete={update}
                sortOrder={sortOrder}
            />
        </div>
    );
};

export default withAPI(App, 'http://localhost:5000/tasks/');
