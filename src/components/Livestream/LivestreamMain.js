import React, { useState } from 'react';
import "../Livestream/Livestream.css";
import Data from './LivestreamApi';
import Livestream from './Livestream';

const LivestreamMain = () => {

     const[menuData, setMenuData] = useState(Data);
     
    return (
        <>

          <div className='navbar'>
                <div>
                    <div className='navbar-logo'><img src="https://shaka-player-demo.appspot.com/demo/shaka_logo_trans.png" alt="shaka_player" /></div>
                    <button className='btn-group-navbar' >Home</button>
                    <button className='btn-group-navbar'>About Us</button>
                    <button className='btn-group-navbar'>Contact Us</button>
              </div>
          </div>

            <Livestream menuData = {menuData}/>
        </>
    );
};

export default LivestreamMain;
