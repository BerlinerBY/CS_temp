import { connect } from 'react-redux'
import { useEffect } from 'react';

function ContentChecking({ getItems, urlPath }) {
    const url = urlPath;

    const fetchItemsData = () => {
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            getItems({
                'data': data,})
        })
    };
    
    useEffect(() => {
        fetchItemsData();
    }, [url]);
}

function mapStateToProps(state) {
    return {
        urlPath: state.getter.value,
    };
}

export default connect(mapStateToProps)(ContentChecking);