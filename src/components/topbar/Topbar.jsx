import React from 'react'
import "./topbar.css"
import {NotificationsNone,Language,Settings} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">ananaswitaj</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                        </div>

                        <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                        </div>

                        <div className="topbarIconContainer">
                        <Settings/>
                        </div>
                    <img src="https://images.pexels.com/photos/4997895/pexels-photo-4997895.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="topAvatar" />
                        
                </div>
            </div>
        </div>
    )
}
