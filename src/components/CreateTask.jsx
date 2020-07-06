import React from 'react';
import moment from 'moment';

class CreateTask extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    render() {
        const classNames = {
            container: 'form-group task-form d-flex justify-content-between',
            input: 'form-control task-form-input px-4 border-0 border-bottom',
            button: 'create-task-btn mr-3 d-flex align-items-center justify-content-center',
            icon: 'material-icons align-middle',
        };

        return (
            <React.Fragment>
                <div className={classNames.container}>
                    <input
                        className={classNames.input}
                        type="text"
                        placeholder="Add new task here..."
                        onKeyDown={this.handlePressEnter}
                        ref={this.input}
                    />
                    <div className={classNames.button}>
                        <i className={classNames.icon} onClick={this.handleClickButton}>
                            add
                        </i>
                    </div>
                </div>
                <hr className="my-4 w-50" />
            </React.Fragment>
        );
    }

    handleCreateTask = (text) => {
        this.props.handleCreate({
            date: moment().format('D MMM, HH:mm'),
            text: text,
            completed: false,
        });
    };

    handlePressEnter = (e) => {
        let text = e.target.value;
        if (e.key === 'Enter' && text) {
            this.handleCreateTask(text);
            e.target.value = '';
        }
    };

    handleClickButton = () => {
        let text = this.input.current.value;
        if (text) {
            this.handleCreateTask(text); //Create new task
            this.textInput.current.value = ''; //Clear input
        }
    };
}

export default CreateTask;
