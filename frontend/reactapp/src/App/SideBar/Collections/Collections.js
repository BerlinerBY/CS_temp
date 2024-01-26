import './Collections.css';
import folder_icon from './folder.png';
import plus_icon from '../../../icons/plus.png';
import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { incremetCollection } from '../../../features/slices/content/contentSlice.js';
import ModalWindow from '../../../ReusableComponents/ModalWindow/ModalWindow.js';
import FButton from '../../../ReusableComponents/FButton/FButton.js';
import { getCollectionRequest } from '../../../features/features/ApiRequests/SideBarRequests.js';

function Collections({ collectionsFromStore }) {
    const collections = collectionsFromStore;
    const dispatch = useDispatch();

    useEffect(() => {
        getCollectionRequest(dispatch);
    }, []);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='my-collections'>
                <div className="title">My collections</div>
                <div className="div-between"></div>
                <div className="header-button" role='button' onClick={() => handleShow()} >
                    <img src={plus_icon} className="SideBar-plus-icon" alt="icon" />
                </div>
                <ModalWindow
                    requestFlag={'POST'}
                    setShow={setShow}
                    show={show}/>
            </div>
            <div className="SideBar-collections">
                {collections.length > 0 && (
                    <div>
                        {collections.map(collection => (
                            <div key={collection.id} className="SideBar-collection">
                                <div className='SideBar-collection-button' 
                                    role='button'
                                    onClick={() => dispatch(incremetCollection({'collection': collection.id, 'collectionTitle': collection.title}))}>
                                    <div className="icon-button">
                                        <img src={folder_icon} className="SideBar-user-icon" alt="icon" />
                                    </div>
                                    <div className='title'>{collection.title}</div>
                                    <div className="div-between"></div>
                                </div>
                                <div className='SideBar-collection-add'>
                                    <FButton 
                                        collectionObject={collection}
                                        />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>

    )
}

function displayStateToProps(state) {
    return {
        collectionsFromStore: state.colReducer.collections,
    };
}

export default connect(displayStateToProps)(Collections);