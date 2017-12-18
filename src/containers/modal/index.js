import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import {
    hideModal,
} from '../../actions/modal';

class ModalComponent extends Component {
    render() {
        const { selectedUser } = this.props;
        return (
            <Modal
                show={this.props.showModal}
                onHide={this.props.hideModal}
                dialogClassName="custom-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">
                        {selectedUser.login}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-sm-6">
                            <img src={selectedUser.avatar_url} className="img-responsive" alt={selectedUser.login} />
                        </div>
                        <div className="col-sm-6">
                            <p>Full name: {selectedUser.name}</p>
                            <p>Followers: {selectedUser.followers}</p>
                            <p>Following: {selectedUser.following}</p>
                            <p>Location: {selectedUser.location}</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.hideModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}


const mapStateToProps = state => ({
    showModal: state.modal.show,
    selectedUser: state.user.selectedUser,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    hideModal,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ModalComponent);