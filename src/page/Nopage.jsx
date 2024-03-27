import React from 'react'
import '../scss/Nopage.scss'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function Nopage() {
  return (
    <>
      <Header />
      <div className='no-page d-flex justify-content-center align-items-center align-content-center '>
        <div className='d-flex flex-column justify-content-center align-items-center '>
          <h1>ERROR 404</h1>
          <p>No Content.</p>
          <div className='py-5'>
            <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>

          <h5>Go to <Link to='/'>Home</Link></h5>
        </div>

      </div>
    </>

  )
}

export default Nopage