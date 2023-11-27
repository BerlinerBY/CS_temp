import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import plus_icon from '../../icons/plus.png';

import './CreateBookmark.css'

function CreateBookmark({ collectionID, refreshPage }) {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [collection, setCollection] = useState(collectionID);
    const [url_field, setURL] = useState('');
    const [description, setDecription] = useState('');

    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
        clearState();
    }

    const clearState = () => {
        setTitle('');
        setCollection(collectionID);
        setURL('');
        setDecription('');
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
        postRequest();
        handleClose();
        clearState();
        refreshPage(true);
    };

    const postRequest = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    title: title,
                    collection: collection,
                    url_field: url_field,
                    description: description
                })
        };
        fetch("http://127.0.0.1:8000/api/items/", requestOptions)
            .then(response => response.json())
    };

    return (
        <>
        <div className="header-button" role='button' onClick={handleShow} >
            <img src={plus_icon} className="SideBar-plus-icon" alt="icon" />
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create collection</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="ControlInput">
                        <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="New item"
                                autoFocus
                                value={title}
                                onChange={handleTitleChange}
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInput">
                        <Form.Label>Collection</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                defaultValue={collectionID}
                                onChange={handleCollectionChange}
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInput">
                         <Form.Label>URL</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="https://kangaroo.by"
                                autoFocus
                                value={url_field}
                                onChange={handleURLChange}
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInput">
                         <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Description"
                                autoFocus
                                value={description}
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

export default CreateBookmark;