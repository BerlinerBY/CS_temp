//Function for GET/POST/PUT/DELETE item

import { addNewItem, incremetItemsChunk, deleteItem, changeItem } from "../../slices/content/contentSlice";

export function getItemRequest({ collectionID, dispatch}) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    };

    fetch("http://127.0.0.1:8000/api/collection/" + collectionID, requestOptions)
        .then(response => {
            return response.json();
        })
        .then(data => {
            dispatch(incremetItemsChunk({'items': data}));
        })
        .catch(error => {
            console.error(error);
        });
};


export function postItemRequest(title, collection, url_field, description, dispatch) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                title: title,
                collection: collection,
                url_field: url_field,
                description: description
            })
    };
    fetch("http://127.0.0.1:8000/api/items/", requestOptions)
        .then(response => response.json())
        .then (data => {
            dispatch(addNewItem(data));
        })
        .catch(error => error);
};

export function putItemRequest(itemID, title, collection, url_field, description, dispatch) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                title: title,
                collection: collection,
                url_field: url_field,
                description: description
            })
    };
    fetch("http://127.0.0.1:8000/api/items/update/" + itemID, requestOptions)
        .then(response => response.json())
        .then(data => {
            dispatch(changeItem(data));
        })
        .catch(error => error);
};

export function deleteItemRequest(itemID, dispatch) {
    const requestOptions = {
        method: 'DELETE',
    };
    fetch("http://127.0.0.1:8000/api/items/delete/" + itemID, requestOptions)
        .then(() => dispatch(deleteItem(itemID)))
        .catch(error => console.log(error));
}