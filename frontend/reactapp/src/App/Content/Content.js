import './Content.css'
import ContentChecking from './ContentChecking';
import React, { useState } from 'react';
import ContentByCollection from './ContentByCollection/ContentByCollection'


function Content() {
    const [items, setItem] = useState([]);

    const getItems = (data) => {
        setItem(data['data']);
    }

    return (
        <div className="Content">
        <header className="Content-header">
            <div className="SearchBar"></div>
            <div className="Category-field">
                <p>Category</p>
            </div>
            <hr></hr>
        </header>
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