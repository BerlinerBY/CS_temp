//Function for GET/POST/DELETE collection

import { setCollections, addCollection, removeCollection, changeCollection } from "../../slices/collections/collectionSlice";


export function deleteCollectionRequest(collectionId, dispatch) {
    const requestOptions = {
        method: 'DELETE'
    };
    fetch("http://127.0.0.1:8000/api/collections/delete/" + collectionId,
        requestOptions)
        .then(() => dispatch(removeCollection(collectionId)))
        .catch(error => {
            console.error(error);
        });
};

export function getCollectionRequest(dispatch) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    };


    fetch("http://127.0.0.1:8000/api/collections/", requestOptions)
        .then(response => {
            return response.json();
        })
        .then(data => dispatch(setCollections(data)))
        .catch(error => {
            console.error(error);
        });
};

export function postCollectionRequest(title, dispatch) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({title: title})
    };
    fetch("http://127.0.0.1:8000/api/collections/", requestOptions)
        .then(response => response.json())
        .then(data => dispatch(addCollection(data)))
        .catch(error => {
            console.error(error);
        });
};

// Add PUT request
export function putCollectionRequest(collectionID, collectionTitle, dispatch) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                title: collectionTitle,
            })
    };
    fetch("http://127.0.0.1:8000/api/collections/update/" + collectionID, requestOptions)
        .then(response => response.json())
        .then(data => {
            dispatch(changeCollection(data));
        })
        .catch(error => error);
}