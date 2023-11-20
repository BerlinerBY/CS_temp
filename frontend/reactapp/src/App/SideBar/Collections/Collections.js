import './Collections.css';
import folder_icon from './folder.png';
import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { incremetNewChunk } from '../../../features/getter/getterSlice';


function Collections() {
    const [collections, setCollection] = useState([])
    const apiUrl = "http://127.0.0.1:8000/api/collections/"
    const dispath = useDispatch()
    

    const fetchCollectionsData = () => {
        fetch(apiUrl)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setCollection(data)
        })
    }

    useEffect(() => {
        fetchCollectionsData()
    }, [])

    return (
        <div className="SideBar-collections">
            {collections.length > 0 && (
                <div>
                    {collections.map(collection => (
                        <div className="SideBar-collection" role='button' onClick={() => dispath(incremetNewChunk('collection/' + collection.id))}>
                            <div className="icon-button">
                                <img src={folder_icon} className="SideBar-user-icon" alt="icon" />
                            </div>
                            <div className='title'>{collection.title}</div>
                            <div className="div-between"></div>
                            <div className="info-count-items">I</div>
                        </div>
                    ))}
                </div>
            )}
        </div>

    )
}


export default Collections;