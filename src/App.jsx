import React, { useState } from 'react';
// Components
import TasksList from './components/TasksList';
import CreateForm from './components/CreateForm';
import Toolbar from './components/Toolbar/Toolbar';
// HOC
import withAPI from './hoc/withAPI';

const App = (props) => {
    const [order, setOrder] = useState(true);
    const { data: tasks = [], create, remove, update } = props;

    return (
        <div className="container pt-5">
            <CreateForm handleCreate={create} />
            <Toolbar
                orderToggle={{
                    order,
                    changeOrder: () => setOrder(!order),
                }}
            />
            <TasksList
                tasks={[...tasks]}
                handleDelete={remove}
                handleComplete={update}
                order={order}
            />
        </div>
    );
};

export default withAPI(App, 'http://localhost:5000/tasks/');
