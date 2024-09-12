import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const Cart = () => {
  return (
      <>
          <Meta title="Cart" />                                               
          <BreadCrumb title="Cart" />
          <div className='cart-wrapper home-wrapper-2 py-5'>
              <div className='container-xxl'>
                  <div className='row'>
                      <div className='col-12'>
                          <div className='cart-header d-flex justify-content-between align-content-center'></div>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default Cart