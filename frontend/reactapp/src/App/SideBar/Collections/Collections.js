import './Collections.css';
import folder_icon from './folder.png';
import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { incremetNewChunk } from '../../../features/getter/getterSlice';
import ModalWindow from './ModalWindow/ModalWindow';
import FButton from './FButton/FButton';


function Collections() {
    const [collections, setCollection] = useState([]);
    const [refresh_v, setRefresh] = useState(0);
    const apiUrl = "http://127.0.0.1:8000/api/collections/";
    const dispath = useDispatch();
    
    const refreshCollections = () => {
        setRefresh(refresh_v + 1)
    };

    const fetchCollectionsData = () => {
        fetch(apiUrl)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setCollection(data);
        })
    };

    const deleteRequest = (collectionId) => {
        const requestOptions = {
            method: 'DELETE'
        };
        fetch(
            apiUrl+ "delete/" + collectionId,
            requestOptions)
            .then(data => {refreshCollections();})
    };

    useEffect(() => {
        fetchCollectionsData();
    }, [refresh_v]);

    return (
        <>
            <div className='my-collections'>
                <div className="title">My collections</div>
                <div className="div-between"></div>
                <ModalWindow refreshCollections={refreshCollections}/>
            </div>
            <div className="SideBar-collections">
                {collections.length > 0 && (
                    <div>
                        {collections.map(collection => (
                            <div key={collection.id} className="SideBar-collection">
                                <div className='SideBar-collection-button' 
                                    role='button' 
                                    onClick={() => dispath(incremetNewChunk('collection/' + collection.id))}>
                                    <div className="icon-button">
                                        <img src={folder_icon} className="SideBar-user-icon" alt="icon" />
                                    </div>
                                    <div className='title'>{collection.title}</div>
                                    <div className="div-between"></div>
                                </div>
                                <div className='SideBar-collection-add'>
                                    <FButton 
                                        deleteRequest={deleteRequest} 
                                        collectionId={collection.id}
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


export default Collections;