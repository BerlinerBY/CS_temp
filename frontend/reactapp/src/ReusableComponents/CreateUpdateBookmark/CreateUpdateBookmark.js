import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import plus_icon from '../../icons/plus.png';
import { postItemRequest, putItemRequest } from '../../features/features/ApiRequests/ContentRequests.js';
import { connect, useDispatch } from 'react-redux';

import './CreateUpdateBookmark.css'

function CreateUpdateBookmark({ requestFlag, itemID, 
                          titleField, collectionID, 
                          urlField, descriptionField}) {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState(titleField);
    const [collection, setCollection] = useState(collectionID);
    const [url_field, setURL] = useState(urlField);
    const [description, setDecription] = useState(descriptionField);

    const dispatch = useDispatch();

    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
        clearState();
    }

    const clearState = () => {
        setTitle(titleField);
        setCollection(collectionID);
        setURL(urlField);
        setDecription(descriptionField);
    }

    // replace 4 functions by 1 with conditions
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleCollectionChange = (event) => {
        setCollection(event.target.value);
    };
    const handleURLChange = (event) => {
        setURL(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setDecription(event.target.value);
    };

    const handleSubmit = () => {
        if (requestFlag === "PUT") {
            putItemRequest(itemID, title, collection, url_field, description, dispatch);
        } else if (requestFlag === "POST") {
            postItemRequest(title, collection, url_field, description, dispatch);
        }
        handleClose();
        clearState();
    };

    const buttonType = () => {
        if (requestFlag === 'PUT') {
            return (
                <div className="Content-item-button" role="button" onClick={handleShow}>
                    Edit
                </div>
            )
        } else if (requestFlag === 'POST') {
            return (
                <div className="header-button" role='button' onClick={handleShow} >
                    <img src={plus_icon} className="SideBar-plus-icon" alt="icon" />
                </div>
            )
        }
    };

    const titleType = () => {
        if (requestFlag === 'PUT') {
            return (
                "Edit bookmark"
            )
        } else if (requestFlag === 'POST') {
            return (
                "Create bookmark"
            )
        }
    }

    return (
        <>
        {buttonType()}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{titleType()}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="ControlInput">
                        <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="New item"
                                autoFocus
                                defaultValue={titleField}
                                onChange={handleTitleChange}
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInput">
                        <Form.Label>Collection</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={collectionID}
                                onChange={handleCollectionChange}
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInput">
                         <Form.Label>URL</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="https://kangaroo.by"
                                defaultValue={urlField}
                                onChange={handleURLChange}
                            />
                        </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInput">
                         <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Description"
                                defaultValue={descriptionField}
                                onChange={handleDescriptionChange}
                            />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Save Collection
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}


function displayStateToProps(state) {
    return {
        collectionID: state.contReducer.collectionID,
    };
}

export default connect(displayStateToProps)(CreateUpdateBookmark);