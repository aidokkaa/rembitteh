import React from 'react'
import Flickity from 'react-flickity-component';
import '../flickity.css';
import img from '../images/placeholder.png'
import otz1 from '../images/otz1.jpg';
// import otz2 from '../images/otz2.jpg'
import otz3 from '../images/otz3.jpg'
import otz4 from '../images/otz4.jpg'
import otz5 from '../images/otz5.jpg';
import otz6 from '../images/otz6.jpg';
import otz7 from '../images/otz7.jpg'
export const FlickityOne = () => {
    const flickityOptions = {
        initialIndex: 2
      }
  return (
    <div>
      <h1 className='mainText'>Отзывы</h1>
         <Flickity
      className={'Slider'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
     
    <div className="img">
    <img className="flick" src={otz1}/>
    </div>
    <div className="img">
    <img className="flick" src={otz3}/>
    </div>
    <div className="img">
    <img className="flick" src={otz4}/>
    </div>
    <div className="img">
    <img className="flick" src={otz5}/>
    </div>
    <div className="img">
    <img className="flick" src={otz6}/>
    </div>
    <div className="img">
    <img className="flick" src={otz7}/>
    </div>
    </Flickity>
    </div>
  )
}
