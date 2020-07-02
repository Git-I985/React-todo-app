import React from 'react';

class CreateTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    render() {
        let classNames = {
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
                        onKeyDown={this.handleKeyDown}
                        ref={this.textInput}
                    />
                    <div className={classNames.button}>
                        <i className={classNames.icon} onClick={this.handleSubmit}>
                            add
                        </i>
                    </div>
                </div>
                <hr className="my-4 w-50" />
            </React.Fragment>
        );
    }

    /* Submit on press Enter and press button */
    handleKeyDown = (e) => {
        let text = e.target.value;
        let { handleCreateTask } = this.props;

        if (e.key === 'Enter' && text) {
            handleCreateTask(text);
            e.target.value = '';
        }
    };

    handleSubmit = () => {
        let text = this.textInput.current.value;
        if (text) {
            this.props.handleCreateTask(text); //Create new task
            this.textInput.current.value = ''; //Clear input
        }
    };
}

export default CreateTaskForm;
