import React, { useState } from 'react';
import "../Livestream/Livestream.css";
import Data from './LivestreamApi';
import Livestream from './Livestream';

const LivestreamMain = () => {

     const[menuData, setMenuData] = useState(Data);
     
    return (
        <>

          <div className='navbar'>
                <nav>
                    <button className='btn-group-navbar' >Home</button>
                    <button className='btn-group-navbar'>All</button>
                    <button className='btn-group-navbar'>All</button>
                    <button className='btn-group-navbar'>All</button>
    
              </nav>
          </div>

            <Livestream menuData = {menuData}/>
        </>
    );
};

export default LivestreamMain;
