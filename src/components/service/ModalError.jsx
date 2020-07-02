import React, { Component, Fragment } from 'react';
import Modal from 'react-bootstrap/Modal';

class ModalError extends Component {
    state = {
        isOpen: true,
    };

    render() {
        return (
            <Fragment>
                <Modal
                    show={this.state.isOpen}
                    onHide={() => this.setState({ isOpen: !this.state.isOpen })}>
                    <Modal.Header closeButton className="border-bottom-0 pt-3 pb-0">
                        <Modal.Title className="text-muted"></Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center pb-5">
                        <h3 className="mb-3">Oops, an error occurred!</h3>
                        <div className="text-muted">
                            <p className="mb-0">
                                Server is not responding now, <br /> you can send request to tech
                                support
                            </p>
                            <a href="mailto:edw4rd.young@gmail.com">edw4rd.young@gmail.com</a>
                        </div>
                    </Modal.Body>
                </Modal>
            </Fragment>
        );
    }
}

export default ModalError;
