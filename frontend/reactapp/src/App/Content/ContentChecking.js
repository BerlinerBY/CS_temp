import { connect } from 'react-redux'
import { useEffect } from 'react';

function ContentChecking({ getItems, urlPath , collectionID, refreshValue}) {
    const url = urlPath;
    const refresh = refreshValue; 

    const fetchItemsData = () => {
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            getItems({
                'data': data,
                'collectionID': collectionID})
        })
        .catch(error => {
            console.error(error);
        });
    };
    
    useEffect(() => {
        fetchItemsData();
    }, [url]);

    useEffect(() => {
        fetchItemsData();
    }, [refresh])
}

function mapStateToProps(state) {
    return {
        urlPath: state.getter.urlField,
        collectionID: state.getter.collectionID,
    };
}

export default connect(mapStateToProps)(ContentChecking);