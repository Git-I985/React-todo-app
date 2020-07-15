import React, { useState } from 'react';
import TasksList from './components/TasksList.jsx';
import CreateTask from './components/CreateTask.jsx';
import Toolbar from './components/Toolbar';
import withAPI from './hoc/withAPI';

const App = (props) => {
    const [order, setOrder] = useState(true),
        { data = [], create, remove, update } = props;

    return (
        <div className="container pt-5">
            <CreateTask handleCreate={create} />
            <Toolbar
                orderToggle={{
                    changeOrder: () => setOrder(!order),
                    order,
                }}
            />
            <TasksList
                tasks={[...data]}
                handleDelete={remove}
                handleComplete={update}
                order={order}
            />
        </div>
    );
};

export default withAPI(App, 'http://localhost:5000/tasks/');
