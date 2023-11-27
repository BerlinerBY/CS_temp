import './Content.css'
import ContentChecking from './ContentChecking';
import React, { useState } from 'react';
import ContentByCollection from './ContentByCollection/ContentByCollection'
import CreateBookmark from './CreateBookmark/CreateBookmark';

function Content() {
    const [items, setItem] = useState([]);

    const getItems = (data) => {
        setItem(data['data']);
    }

    return (
        <div className="Content">
            <div className="Content-header">
                <div className="SearchBar"></div>
            </div>
            <div className='Category-field-button'>
                <div className="Category-field">
                    <p>Bookmarks</p>
                </div>
                <CreateBookmark />
            </div>
            <hr></hr>
            <div className='Content-main'>
                <ContentChecking getItems={getItems} />
                {(() => {
                if (items.length >= 1){
                    return (
                        <ContentByCollection items={items}/>
                    )
                }
                return null;
                })()}
            </div>
        </div>
    )
}

export default Content;