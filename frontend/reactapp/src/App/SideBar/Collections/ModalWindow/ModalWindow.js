import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import plus_icon from '../../icons/plus.png';

import './ModalWindow.css'

function ModalWindow({refreshCollections}) {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    
    const handleSubmit = () => {
        postRequest();
        refreshCollections();
        handleClose();
        setTitle("");
    };

    const postRequest = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({title: title})
        };
        fetch("http://127.0.0.1:8000/api/collections/", requestOptions)
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
                            placeholder="New collection"
                            autoFocus
                            value={title}
                            onChange={handleTitleChange}
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

export default ModalWindow;