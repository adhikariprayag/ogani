import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../scss/Header.scss'
import Logo from '../assets/logo.png'
import Button from './Button'
import '../index.scss'
import '../script.js'

function Header() {

  let [cat, setData] = useState([])
  useEffect(() => {

    fetch('https://dummyjson.com/products/categories').then((a) => a.json()).then((b) => setData(b))

  }, [])

  let index = cat.indexOf(`${cat}, 1`)

  return (
    <>
      <header className=''>

        <nav className="navbar navbar-top navbar-expand-lg bg-body-white py-2 ">
          <div className="container d-flex align-content-center ">
            <Link className="navbar-brand" to="/"><img className='w-100' src={Logo} alt="" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto ">
                <li className="nav-item">
                  <Link className="nav-link active text-uppercase" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-uppercase" to="*">Shop</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle text-uppercase " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Pages
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#">Shop Details</Link></li>
                    <li><Link className="dropdown-item" to="#">Shopping Cart</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="#">Blog Details</Link></li>
                    <li><Link className="dropdown-item" to="#">Check Out</Link></li>
                  </ul>

                </li>
                <li className="nav-item">
                  <Link className="nav-link text-uppercase" to="*">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-uppercase" to="*">Contact</Link>
                </li>
              </ul>

              <div className='d-flex  gap-3 fs-5'>
                <div className=''>
                  <Button icon={<i className="bi bi-heart-fill"></i>} />
                </div>
                <div>
                  <Button icon={<i className="bi bi-bag-fill"></i>} />
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className='nav-2'>
          <nav className="navbar navbar-2 navbar-expand-lg bg-body-tertiary d-flex justify-content-center">
            <div className="container  ">
              <div className="collapse navbar-collapse m-0 p-0" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0 m-0 p-0">
                  <li className="nav-item dropdown text-bg-success p-2 text-white ">
                    <div className="nav-link dropdown-toggle bg-emphasis text-white fw-bold " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      ALL CATEGORIES
                    </div>
                    <ul className="dropdown-menu p-0 m-0">
                      {cat.map((a) => (
                        <li key={index} className='dropdown-item '> <Link className='text-decoration-none text-capitalize ' to={`/category/${a}`}>{a}</Link> </li>
                      ))}
                    </ul>
                  </li>
                </ul>

                <div className='d-none d-lg-block mx-auto w-50'>
                  <form className="d-flex" role="search">
                    <input className="form-control py-2 rounded-0 " id='search-box' type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-success rounded-0" type="submit">Search</button>
                  </form>
                </div>


              </div>

              <div className='d-block d-lg-none mx-auto w-100 '>
                <form className="d-flex mx-auto w-100" role="search">
                  <input className="form-control py-2 rounded-0 " id='search-box' type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-success rounded-0" type="submit">Search</button>
                </form>
              </div>

              <div className=' d-lg-block d-none'>
                <div className='d-flex gap-2 align-items-center '>
                  <i className="bi bi-telephone-fill fs-4"></i>
                  <div className='d-flex flex-column '>
                    <div className='fs-6 '>+65 11.188.888</div>
                    <div className='fs-6 text-secondary '>24/7 Service</div>
                  </div>
                </div>
              </div>

            </div>
          </nav>
        </div>

      </header>
    </>
  )
}

export default Header