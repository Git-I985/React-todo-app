import React, { useState, useEffect } from 'react';
import axios from 'axios';

function withAPI(Component, url) {
    return (props) => {
        const [data, setData] = useState([]);

        useEffect(() => {
            get();
        }, []);

        const get = () =>
            axios
                .get(url)
                .then((response) => setData(response.data))
                .catch();

        const create = (data) =>
            axios
                .post(url, data)
                .then((response) => get())
                .catch();

        const remove = (id) =>
            axios
                .delete(`${url}/${id}`)
                .then((response) => get())
                .catch();

        const update = (id, data) =>
            axios
                .put(`${url}/${id}`, data)
                .then((response) => get())
                .catch();

        return (
            <Component
                data={data}
                get={get}
                create={create}
                remove={remove}
                update={update}
                {...props}
            />
        );
    };
}

export default withAPI;
