import React from 'react'
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner p-3'>
              <img src='images/main-banner-1.jpg' className='img-fluid rounded-3' alt='main banner' />
              <div>
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className='col-6'></div>
        </div>
      </div>
    </section>
  )
}

export default Banner