import React from 'react';
// import ReactPlayer from 'react-player';

const Livestream = ({ menuData}) => {
    // console.log(menuData);
  return (
    <>
          <section className='main-card-container'>
          {menuData.map((curElem) =>{
              return(
                  
                      <div className='card-container'>
                          <div className='card'>
                              <div className='card-body'>
                                  <span className='card-title'>{curElem.title}</span>
                              <div>  <img src={curElem.image} alt="movie-poster" /></div>
                                  <span>
                                      <h1>{curElem.description}</h1>
                                  </span>
                                 <div >
                                  <a href={curElem.url}>
                                      <button className='btn' >PLAY</button>
                                  </a>
                                  {/* <ReactPlayer url={curElem.url}/> */}
                                 </div>
                              </div>
                          </div>
                      </div>   
              )
          })}
          </section>

          <div>
              <footer className='footer'>
                  @copyright_since_2022
              </footer>
          </div>
    </>
  )
}

export default Livestream