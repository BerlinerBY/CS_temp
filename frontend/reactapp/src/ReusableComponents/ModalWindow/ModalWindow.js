import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { postCollectionRequest, putCollectionRequest } from '../../features/features/ApiRequests/SideBarRequests.js';
import './ModalWindow.css'

function ModalWindow({ requestFlag, collectionId, collectionTitle, setShow, show }) {
    const dispath = useDispatch();

    const [title, setTitle] = useState(collectionTitle);
    const handleClose = () => setShow(false);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    
    const handleSubmit = () => {
        if (requestFlag === "RENAME") {
            putCollectionRequest(collectionId, title, dispath);
        } else if (requestFlag === "POST") {
            postCollectionRequest(title, dispath);
        }
        handleClose();
        setTitle("");
    };

    const saveButton = () => {
        if (requestFlag === "RENAME") {
            return (
                "Save changes"
                )
        } else if (requestFlag === "POST") {
            return (
                "Save collection"
            )
        }
    };

    const titleType = () => {
        if (requestFlag === "RENAME") {
            return (
                "Rename collection"
            )
        } else if (requestFlag === "POST") {
            return (
                "Create collection"
            )
        }
    };

    return (
        <>
        <Modal show={show} onHide={() => handleClose()}>
            <Modal.Header closeButton>
                <Modal.Title>{titleType()}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="ControlInput">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="New collection"
                            autoFocus
                            defaultValue={collectionTitle}
                            onChange={handleTitleChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose()}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleSubmit()}>
                    {saveButton()}
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default ModalWindow;