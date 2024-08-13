// import React from "react";
// import { NavLink } from "react-router-dom";

// const Home = () => {
//   return <div>
//     <NavLink to="store">OurStore</NavLink>
//   </div>;
// };

// export default Home;


import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner p-3 position-relative'>
              <img src='images/main-banner-1.jpg' className='img-fluid rounded-3' alt='main banner' />
              <div className='main-banner-content position-absolute'>
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className='col-6'></div>
        </div>
      </div>
    </section>
  )
}

export default Home;