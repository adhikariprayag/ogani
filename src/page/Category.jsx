import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, useParams } from 'react-router-dom'
import '../scss/Category.scss'
import Card from '../components/Card';

function Category() {
  let { cid } = useParams()
  var [cat, setCat] = useState([])
  useEffect(() => {

    fetch(`https://dummyjson.com/products/categories`).then((c) => c.json()).then((d) => setCat(d))

  }, [])


  let [data, setData] = useState([])
  useEffect(() => {

    fetch(`https://dummyjson.com/products`).then((a) => a.json()).then((b) => setData(b.products))

  }, [])

  return (
    <>
      <Header />
      <div className="category">
        <div className="container">
          <div className="row py-5 ">
            <div className="col-lg-12 ">
              <div className="cat-title fs-1 text-capitalize fw-semibold ">
                Category: {cid}
              </div>
              <div className="col-lg-3 mt-5 ">
                <ul class="list-group rounded-0 ">
                  <li class="list-group-item active text-center bg-success text-uppercase fw-bolder  " aria-current="true">All Categories</li>

                  {cat.map((c) => (
                    <Link className='text-decoration-none text-black text-capitalize ' to={`/category/${c}`}><li class="list-group-item">{c}</li></Link>
                  ))}
                </ul>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6">
                    
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Category