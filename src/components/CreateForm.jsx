import React, { Fragment } from 'react';
import moment from 'moment';

// TODO: move to fcomponent
class CreateForm extends React.Component {

    state = {
        inputNewTask: ""
    }

    onChangeInputNewTask = (event) => {
        this.setState({ inputNewTask: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.createTask()
    }

    createTask = (text) => {
        this.setState({ inputNewTask: "" })
        this.props.handleCreate({
            date: moment().format('D MMM, HH:mm'),
            text: this.state.inputNewTask,
            completed: false,
        });
    };

    render() {
        const classNames = {
            container: 'form-group task-form d-flex justify-content-between',
            input: 'form-control task-form-input px-4 border-0 border-bottom',
            button: 'create-task-btn mr-3 d-flex align-items-center justify-content-center',
            icon: 'material-icons align-middle',
        }

        return(
            <Fragment>
                <form className={classNames.container} onSubmit={this.submitHandler}>
                    <input
                        className={classNames.input}
                        type="text"
                        placeholder="Add new task here..."
                        value={this.state.inputNewTask}
                        onChange={(event) => this.onChangeInputNewTask(event)}
                    />
                    <button type="submit" className={classNames.button}>
                        <i className={classNames.icon}>
                            add
                        </i>
                    </button>
                </form>
                <hr className="my-4 w-50" />
            </Fragment>
        )
    }
}

export default CreateForm;
