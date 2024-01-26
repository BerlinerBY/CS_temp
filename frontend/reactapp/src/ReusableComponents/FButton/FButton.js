import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FButton.css';
import  fbuttoncon from './dots.png'
import { deleteCollectionRequest, putCollectionRequest } from '../../features/features/ApiRequests/SideBarRequests.js';
import { useDispatch } from 'react-redux';
import ModalWindow from '../ModalWindow/ModalWindow.js';

function FButton({ collectionObject }) {
    const dispath = useDispatch();

    // find way to override isHovered in future or delete it
    const [isHovered, setHovered] = useState(false);

    const fButtonIcon = (
        <div>
            <img className='' src={fbuttoncon} alt='icon'/>
        </div>
    )

    function handleMouseEnter() {
        setHovered(true);
    };
    function handleMouseLeave() {
        setHovered(false);
    };

    const removeCollection = () => {
        deleteCollectionRequest(collectionObject.id, dispath);
    };
    const renameCollection = () => {
        handleShow();
        //putCollectionRequest(collectionId, collectionTitle, dispath);
    }

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="info-count-items" 
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}>
                {/* {isHovered ? (
                    <Dropdown className="dropdown-div" autoClose={false}>
                        <DropdownButton className="dropdown-button-custom" title={fButtonIcon}>
                            <Dropdown.Item as="button">Select</Dropdown.Item>
                            <Dropdown.Item as="button">Action 1</Dropdown.Item>
                                <Dropdown.Divider />
                            <Dropdown.Item as="button" onClick={removeCollection()}>Remove</Dropdown.Item>
                        </DropdownButton>
                    </Dropdown>
                ) : (
                    <p>I</p>
                )} */}
                <Dropdown id="dropdown-div" 
                        autoClose={false}
                        onClick={action => {
                            if (action.target.id === "dropdown-remove") {
                                removeCollection();
                            } else if (action.target.id === "dropdown-rename") {
                                renameCollection();
                            }
                        }}>
                    <DropdownButton id="dropdown-b-c" title={fButtonIcon}>
                        <Dropdown.Item as="button">Select</Dropdown.Item>
                        <Dropdown.Item as="button">Create Bookmark</Dropdown.Item>
                        <Dropdown.Item as="button" id="dropdown-rename">Rename</Dropdown.Item>
                            <Dropdown.Divider /> 
                        <Dropdown.Item as="button" id="dropdown-remove">Remove</Dropdown.Item>
                    </DropdownButton>
                </Dropdown>
                <ModalWindow 
                    requestFlag={'RENAME'}
                    collectionId={collectionObject.id}
                    collectionTitle={collectionObject.title}
                    setShow={setShow}
                    show={show}
                    />
            </div>
        </>
    )
}

export default FButton;