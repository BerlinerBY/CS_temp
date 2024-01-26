import openLogo from '../../../../icons/open.png';
import binLogo from '../../../../icons/bin.png';
import './CardButtons.css'
import UpdateBookmark from '../../../../ReusableComponents/CreateUpdateBookmark/CreateUpdateBookmark';
import { deleteItemRequest } from '../../../../features/features/ApiRequests/ContentRequests.js';
import { useDispatch } from 'react-redux';

function CardButtons({ item }) {
    const urlRedirect = item.url_field
    const idBookmark = item.id
    const dispatch = useDispatch();

    const pageRedirect = () => {
        window.open(urlRedirect);
    };

    const removeBookmark = () => {
        deleteItemRequest(idBookmark, dispatch);
    };


    return (
        <div className="Content-item-buttons">
            <div className="Content-item-button" role="button" onClick={pageRedirect}>
                <img src={openLogo} alt="Open in new tab"/>
            </div>
            <UpdateBookmark 
                    requestFlag={"PUT"}
                    itemID={item.id}
                    titleField={item.title}
                    collectionID={item.collection}                        
                    urlField={item.url_field}
                    descriptionField={item.description}/>
            <div className="Content-item-button" role="button" onClick={removeBookmark}>
                <img src={binLogo} alt="Remove"/>
            </div>
        </div>
    )
}

export default CardButtons;