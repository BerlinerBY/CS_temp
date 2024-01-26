import './Content.css'
import React, { useEffect } from 'react';
import ContentByCollection from './ContentByCollection/ContentByCollection'
import CreateUpdateBookmark from '../../ReusableComponents/CreateUpdateBookmark/CreateUpdateBookmark';
import { connect, useDispatch } from 'react-redux';
import { getItemRequest } from '../../features/features/ApiRequests/ContentRequests';

function Content({ itemsByCollection, collectionTitleFromStore, collectionID }) {
    const items = itemsByCollection;
    const dispatch = useDispatch();
    const collectionTitle = collectionTitleFromStore;

    useEffect(() => {
        getItemRequest({ collectionID, dispatch });
    }, [collectionID])

    return (
        <div className="Content">
            <div className="Content-header">
                <div className="SearchBar"></div>
            </div>
            <div className='Category-field-button'>
                <div className="Category-field">
                    <p>{collectionTitle}</p>
                </div>
                <CreateUpdateBookmark 
                    requestFlag={"POST"}
                    />
            </div>
            <hr></hr>
            <div className='Content-main'>
                {(() => {
                if (items.length >= 1){
                    return (
                        <ContentByCollection 
                            items={items}
                            />
                    )
                }
                return null;
                })()}
            </div>
        </div>
    )
}

function displayStateToProps(state) {
    return {
        itemsByCollection: state.contReducer.itemsByCollection,
        collectionTitleFromStore: state.contReducer.collectionTitle,
        collectionID: state.contReducer.collectionID,
    };
}

export default connect(displayStateToProps)(Content);
