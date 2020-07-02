import React from 'react';
import axios from 'axios';

function withCRUD(Component, url) {
    return class extends Component {
        state = {
            data: [],
        };

        componentDidMount = () => this.get();

        get = () => {
            axios
                .get(url)
                .then((response) => response.data)
                .then((data) => this.setState({ data }))
                .catch();
        };

        create = (data) => {
            axios
                .post(url, data)
                .then((response) => this.get())
                .catch();
        };

        remove = (id) => {
            axios
                .delete(`${url}/${id}`)
                .then((response) => this.get())
                .catch();
        };

        update = (id, data) => {
            axios
                .put(`${url}/${id}`, data)
                .then((response) => this.get())
                .catch();
        };

        render() {
            return (
                <Component
                    data={this.state.data}
                    get={this.get}
                    create={this.create}
                    remove={this.remove}
                    update={this.update}
                    {...this.props}
                />
            );
        }
    };
}

export default withCRUD;
