import { NavLink } from 'react-router-dom';
import { Twitter, Home, Explore, Notifcations,Messages, Bookmarks,Lists, Profile,More, Dot } from '../icons';
import React from 'react';
import './leftpane.scss';

const LeftPane = () => {
    return ( 
        <div className="leftpane">

           <div className="container">
             <header className="logo">
                <span>{Twitter}</span>
                 </header>

             <nav>
                 <NavLink to="/" exact activeClassName="selected">
                     <span>{Home}Home</span>
                 </NavLink>
                 <NavLink to="/explore" activeClassName="selected">
                    <span>{Explore}Explore</span> 
                 </NavLink>
                 <NavLink to="/notifications" activeClassName="selected">
                     <span>{Notifcations}Notifications</span>
                 </NavLink>
                 <NavLink to="/messages" activeClassName="selected">
                     <span>{Messages}Messages</span>
                 </NavLink>
                 <NavLink to="/bookmarks" activeClassName="selected">
                     <span>{Bookmarks}Bookmarks</span>
                 </NavLink>
                 <NavLink to="/lists" activeClassName="selected">
                     <span>{Lists}Lists</span>
                 </NavLink>
                 <NavLink to="/profile" activeClassName="selected">
                     <span>{Profile}Profile</span>
                 </NavLink>
                 <button className="more" activeClassName="selected">
                     <span>{More}More</span>
                 </button>
             </nav>
            <button className="tweet">
                Tweet
            </button>

            <footer>
            <div className="account">
                <span>
                <div className="image">
                  <img 
                    alt="user" 
                    src="https://pbs.twimg.com/profile_images/1396032802785792007/oOw0_zfI_normal.jpg"
                  />
                 </div>
                 <div>
                    <div className="name">EbenezerDon</div>
                    <div className="username">@ebenezerDN</div>
                 </div>
                 <div>
                     <i>{Dot}</i>
                 </div>
                 </span>
              
                
            </div>
            </footer>
      
            </div>
        </div>
     );
}
 
export default LeftPane;