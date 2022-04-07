import React from 'react';

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
                              <img src={curElem.image}alt="RRR MOVIE" />
                                  <span className='title'>{curElem.title}</span>
                                  <span>
                                      <h1>{curElem.description}</h1>
                                  </span>
                                 <div >
                                  <a href={curElem.url}>
                                      <button className='btn' >PLAY</button>
                                  </a>
                                
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