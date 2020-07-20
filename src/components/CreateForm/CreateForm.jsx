import React, { Fragment, useState } from 'react';
import moment from 'moment';
import classNames from './classNames';

const CreateForm = (props) => {
    const { handleCreate, resetFilter } = props;
    const [inputValue, setInputValue] = useState('');

    const createTask = (e) => {
        e.preventDefault();
        e.target.reset();

        if (inputValue) {
            let task = {
                date: moment().format('D MMM, HH:mm'),
                text: inputValue,
                completed: false,
            };

            handleCreate(task);
            resetFilter();
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
