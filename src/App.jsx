import React, { Component } from 'react';
import TaskList from './components/TaskList.jsx';
import CreateTask from './components/CreateTask.jsx';
import OrderToggle from './components/service/OrderToggle.jsx';

// import Loader from './components/service/Loader.jsx';
// import ErrorMessage from './components/service/ErrorMessage.jsx';

import withCRUD from './hoc/withAPI.jsx';

class App extends Component {
    state = {
        sortOrder: true,
    };

    render() {
        let { sortOrder } = this.state;
        let { data = [], create, remove, update } = this.props;

        return (
            <div className="container pt-5">
                <CreateTask handleCreate={create} />
                <OrderToggle
                    changeSortOrder={() => this.setState({ sortOrder: !this.state.sortOrder })}
                    sortOrder={sortOrder}
                />
                <TaskList
                    tasks={[...data]}
                    handleDelete={remove}
                    handleComplete={update}
                    reverse={sortOrder}
                />
            </div>
        );
    }

    // Complete task
    // handleCompleteTask = (task_id) => {
    //     let task = this.state.tasks.filter((t) => t.id === task_id)[0];
    //     task.completed = !task.completed;
    //     axios
    //         .put(this.server_url + task_id, task)
    //         .then((response) => this.getTasks())
    //         .catch((error) => this.setState({ error: true }));
    // };

    // utils
    // handleErrorModalClose = () => this.setState({ error: false });

    changeSortOrder = () => {
        this.setState({
            sortOrder: !this.state.sortOrder,
        });
    };
}

export default withCRUD(App, 'http://localhost:5000/tasks/');
