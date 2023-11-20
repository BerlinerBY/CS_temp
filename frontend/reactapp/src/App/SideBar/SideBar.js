import user_icon from './icons/user.png';
import arrow_icon from './icons/arrow-navigate.png';
import plus_icon from './icons/plus.png';
import './SideBar.css'
import Collections from './Collections/Collections';

import { useDispatch } from 'react-redux';
import { incremet, decrement, incremetByAmount } from '../../features/counter/counterSlice';
import { incremetNewChunk } from '../../features/getter/getterSlice';

function SideBar() {
    const dispath = useDispatch()
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
                <div className="header-button">
                    <img src={plus_icon} className="SideBar-plus-icon" alt="icon" />
                </div>
            </header>
            <div className="SideBar-header-buttons">
                <div className="SideBar-buttons">
                    <div className="SideBar-button" role='button' onClick={() => dispath(incremetNewChunk('items/'))}>
                        <div className="icon-button">
                            <img src={user_icon} className="SideBar-user-icon" alt="icon" />
                        </div>
                        <div className="title-button">
                            <p className="superlink">All bookmarks</p>
                        </div>
                        <div class="div-between"></div>
                        <div className="info-count-items">I</div>
                        
                    </div>
                    <div className="SideBar-button" role='button' onClick={() => dispath(incremetNewChunk('items/'))}>
                        <div className="icon-button">
                            <img src={user_icon} className="SideBar-user-icon" alt="icon" />
                        </div>
                        <div className="title-button">
                            <a className="superlink" href="/">Unsorted</a>
                        </div>
                        <div class="div-between"></div>
                        <div className="info-count-items">I</div>
                    </div>
                    <div className="SideBar-button" role='button' onClick={() => dispath(incremetNewChunk('items/'))}>
                        <div className="icon-button">
                            <img src={user_icon} className="SideBar-user-icon" alt="icon" />
                        </div>
                        <div className="title-button">
                            <a className="superlink" href="/">Trash</a>
                        </div>
                        <div class="div-between"></div>
                        <div className="info-count-items">I</div>
                    </div>
                </div>
                <div>
                    <div className="title">My collections</div>
                    <div className="action-buuton"></div>
                </div>
            </div>
            <Collections/>
        </div>
    )
}

export default SideBar;