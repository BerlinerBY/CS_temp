import user_icon from '../../icons/user.png';
import arrow_icon from '../../icons/arrow-navigate.png';
import './SideBar.css'
import Collections from './Collections/Collections';

import { useDispatch } from 'react-redux';
import { incremetCollection } from '../../features/slices/content/contentSlice';

function SideBar() {
    const dispatch = useDispatch()
    return (
        <div className="SideBar">
            <header className="SideBar-header">
                <div className="header-action">
                    <span className="icon-avatar">
                        <img src={user_icon} className="SideBar-user-icon" alt="icon" />
                    </span>
                    <span className="username">BerlinerBY</span>
                    <span className="icon-dropdown">
                        <img src={arrow_icon} className="SideBar-arrow-icon" alt="icon" />
                    </span>
                </div>
            </header>
            <div className="SideBar-header-buttons">
                <div className="SideBar-buttons">
                    <div className="SideBar-button" role='button' onClick={() => dispatch(incremetCollection({'collection': 0, 'collectionTitle': 'All bookmarks'}))}>
                        <div className="icon-button">
                            <img src={user_icon} className="SideBar-user-icon" alt="icon" />
                        </div>
                        <div className="title-button">
                            <p className="superlink">All bookmarks</p>
                        </div>
                        <div className="div-between"></div>
                        <div className="info-count-items">I</div>
                        
                    </div>
                    <div className="SideBar-button" role='button' onClick={() => dispatch(incremetCollection({'collection': 0, 'collectionTitle': 'Unsorted'}))}>
                        <div className="icon-button">
                            <img src={user_icon} className="SideBar-user-icon" alt="icon" />
                        </div>
                        <div className="title-button">
                            <p>Unsorted</p>
                        </div>
                        <div className="div-between"></div>
                        <div className="info-count-items">I</div>
                    </div>
                    <div className="SideBar-button" role='button' onClick={() => dispatch(incremetCollection({'collection': 0, 'collectionTitle': 'Trash'}))}>
                        <div className="icon-button">
                            <img src={user_icon} className="SideBar-user-icon" alt="icon" />
                        </div>
                        <div className="title-button">
                            <p>Trash</p>
                        </div>
                        <div className="div-between"></div>
                        <div className="info-count-items">I</div>
                    </div>
                </div>
            </div>
            <Collections/>
        </div>
    )
}

export default SideBar;