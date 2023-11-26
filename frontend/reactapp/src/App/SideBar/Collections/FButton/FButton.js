import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FButton.css';
import  fbuttoncon from './dots.png'

function FButton({ deleteRequest, collectionId}) {
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
        deleteRequest(collectionId);
    };

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
                <Dropdown className="dropdown-div" 
                        autoClose={false}
                        onClick={action => {
                            if (action.target.id === "dropdown-remove") {
                                removeCollection();
                            }
                        }}>
                    <DropdownButton id="dropdown-b-c" title={fButtonIcon}>
                        <Dropdown.Item as="button">Select</Dropdown.Item>
                        <Dropdown.Item as="button">Action 1</Dropdown.Item>
                            <Dropdown.Divider /> 
                        <Dropdown.Item as="button" id="dropdown-remove">Remove</Dropdown.Item>
                    </DropdownButton>
                </Dropdown>
            </div>
        </>
    )
}

export default FButton;