import React, { Component } from 'react';
// import { ThemeProvider, createGlobalStyle } from 'styled-components';
import TaskList from './components/TaskList.jsx';
import CreateTask from './components/CreateTask.jsx';
import OrderToggle from './components/service/OrderToggle.jsx';

// import Loader from './components/service/Loader.jsx';
// import ErrorMessage from './components/service/ErrorMessage.jsx';

import withAPI from './hoc/withAPI';

// const ThemeStyle = createGlobalStyle`
// body {
//     background-color: ${(props) => (props.theme.dark ? '#222226' : '#ffffff')};
// }
// .task-item {
//     background-color:  ${(props) => (props.theme.dark ? '#333336' : '#ffffff')};
// }
// .task-text {
//     color: ${(props) => (props.theme.dark ? '#b0b7be' : '')};
// }
// .task-form, .task-form-input, .task-form-input:focus {
//     background-color: ${(props) => (props.theme.dark ? '#333336' : '#ffffff')};
// }
// .
// `;

class App extends Component {
    state = {
        sortOrder: true,
        darkTheme: false,
    };

    render() {
        let { sortOrder } = this.state;
        let { data = [], create, remove, update } = this.props;

        return (
            <div className="container pt-5">
                <div className="toolbar d-flex justify-content-end mb-4">
                    <div className="dark-mode-toggle">
                        <label className="switch">
                            <input type="checkbox" onChange={() => {}} />
                            <div>
                                <span>{this.state.darkTheme ? 'Dark' : 'Light'}</span>
                            </div>
                        </label>
                    </div>
                </div>

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
}

export default withAPI(App, 'http://localhost:5000/tasks/');
