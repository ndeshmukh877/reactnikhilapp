import React, { useState, useEffect } from 'react'
import Weathercard from './weathercard';

const Temp = () => {

    const [searchValue, setSearchvalue] =useState("pune");
    const[tempInfo, setTempInfo] = useState({});

    const getWeatherInfo = async ()=> {
        try{
            let url =
                `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=a82f12236dc2a3ab19d16334bd1a9f04`;

                const res = await fetch(url);
                const deta = await res.json();
                // console.log(deta);

                const {temp, humidity, pressure} = deta.main;
                const {main:weathermood} = deta.weather[0];
                const {name} = deta;
                const {speed} = deta.wind;
                const {country, sunset} = deta.sys;

                const myNewWeatherInfo = {
                    temp,
                    humidity,
                    pressure,
                    weathermood,
                    name,
                    speed,
                    country,
                    sunset,
                };

            setTempInfo(myNewWeatherInfo);

                // console.log(temp);
        }catch(error) {
            // console.log(error);
        }
    };

    useEffect(() => {
        getWeatherInfo();
    }, []);
    

  return (
    <>
      <div className='wrap'>
          <div className='search'>
              <input type="search"
               placeholder='search...'
               autoFocus
               id='search'
               className='seachTerm'
                      value={searchValue}
               onChange={(e) => setSearchvalue(e.target.value)}
               />
         </div>
     </div>
               <button className='searchButton' type='button' onClick={getWeatherInfo}>
                    search
               </button>

               {/* our temp card */}
          <Weathercard tempInfo={tempInfo}/>
    </>
  )
}

export default Temp









