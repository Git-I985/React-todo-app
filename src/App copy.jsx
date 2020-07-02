import React, { Component } from 'react';
import moment from 'moment'; //Date lib
import axios from 'axios'; //HTTP

import TaskList from './components/TaskList.jsx';
import CreateTaskForm from './components/CreateTaskForm.jsx';
import OrderToggle from './components/service/OrderToggle.jsx';
import Loader from './components/service/Loader.jsx';
import ErrorMessage from './components/service/ErrorMessage.jsx';

class App extends Component {
    server_url = 'http://localhost:5000/tasks/';

    state = {
        tasks: [],
        sortOrder: true,
        error: false,
        loading: true,
    };

    componentDidMount() {
        this.getTasks();
    }

    render() {
        let { sortOrder, tasks } = this.state;

        return (
            <div className="container pt-5">
                <CreateTaskForm handleCreateTask={this.handleCreateTask} />
                <OrderToggle changeSortOrder={this.changeSortOrder} sortOrder={sortOrder} />
                <TaskList
                    tasks={[...tasks]}
                    handleCompleteTask={this.handleCompleteTask}
                    handleDeleteTask={this.handleDeleteTask}
                    reverse={sortOrder}
                />
            </div>
        );
    }

    // get tasks from server
    getTasks = () => {
        axios
            .get(this.server_url)
            .then((response) => this.setState({ tasks: response.data, loading: false }))
            .catch((error) => this.setState({ error: true, loading: false }));
    };

    // Complete task
    handleCompleteTask = (task_id) => {
        let task = this.state.tasks.filter((t) => t.id === task_id)[0];
        task.completed = !task.completed;
        axios
            .put(this.server_url + task_id, task)
            .then((response) => this.getTasks())
            .catch((error) => this.setState({ error: true }));
    };

    // Delete task
    handleDeleteTask = (task_id) => {
        axios
            .delete(this.server_url + task_id)
            .then((response) => this.getTasks())
            .catch((error) => this.setState({ error: true }));
    };

    // Create task
    handleCreateTask = (task_text) => {
        let task = {
            // TODO: move date generate to server
            date: moment().format('D MMM, HH:mm'),
            text: task_text,
            completed: false,
        };
        axios
            .post(this.server_url, task)
            .then((response) => this.getTasks())
            .catch((error) => this.setState({ error: true }));
    };

    // utils
    handleErrorModalClose = () => this.setState({ error: false });
    changeSortOrder = () => {
        this.setState({
            sortOrder: !this.state.sortOrder,
        });
    };
}

export default App;
