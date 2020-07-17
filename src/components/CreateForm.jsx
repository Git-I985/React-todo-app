import React, { Fragment, useState } from 'react';
import moment from 'moment';

const CreateForm = (props) => {
    const { handleCreate } = props;
    const [inputValue, setInputValue] = useState('');

    const classNames = {
        container: 'form-group task-form d-flex justify-content-between',
        input: 'form-control task-form-input px-4 border-0 border-bottom',
        button: 'create-task-btn mr-3 d-flex align-items-center justify-content-center',
        icon: 'material-icons align-middle',
    };

    const createTask = (e) => {
        e.preventDefault();
        e.target.reset();

        if (inputValue) {
            handleCreate({
                date: moment().format('D MMM, HH:mm'),
                text: inputValue,
                completed: false,
            });

            setInputValue('');
        }
    };

    return (
        <Fragment>
            <form className={classNames.container} onSubmit={createTask}>
                <input
                    className={classNames.input}
                    type="text"
                    placeholder="Add new task here..."
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" className={classNames.button}>
                    <i className={classNames.icon}>add</i>
                </button>
            </form>
            <hr className="my-4 w-50" />
        </Fragment>
    );
};

export default CreateForm;
