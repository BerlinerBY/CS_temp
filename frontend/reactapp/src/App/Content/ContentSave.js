import './Content.css'
import { useSelector, connect } from 'react-redux'
import React, {useState, useEffect} from 'react';
import ContentByCollection from './ContentByCollection/ContentByCollection'


function Content() {
    const urlPath = useSelector((state) => state.getter.value);
    const [items, setItem] = useState([]);

    const fetchItemsData = () => {
        fetch(urlPath)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setItem(data)
        })
    };


    useEffect(() => {
        fetchItemsData();
    }, []);

    return (
        <div className="Content">
            <header className="Content-header">
                <div className="SearchBar"></div>
                <div className="Category-field">
                    <p>Category</p>
                </div>
                <hr></hr>
            </header>
            <div>
                <p>{urlPath}</p>
                <p>{items.length}</p>
                <p></p>
            </div>
            <div>
                {(() => {
                if (items.length >= 2){
                    return (
                        <ContentByCollection items={items}/>
                    )
                }
                
                return null;
                })()}
            </div>
        </div>
    );
}

export default Content;