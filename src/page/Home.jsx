import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../scss/Home.scss'
import One from '../assets/1.jpg'
import Two from '../assets/2.jpg'
import Three from '../assets/3.jpg'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

function Home() {

  //MAIN DATA

  let [data, setData] = useState([])
  useEffect(() => {

    fetch(`https://dummyjson.com/products`).then((a) => a.json()).then((b) => setData(b.products))

  }, [])

  var fdata = data.filter((b) => b.discountPercentage > 15)

  //CATEGORIES
  let [cat, setCat] = useState([])
  useEffect(() => {

    fetch(`https://dummyjson.com/products/categories`).then((c) => c.json()).then((d) => setCat(d))

  }, [])

  return (
    <>
      <Header />

      <section className="home">
        <div className="container">

          <div className="row py-5 ">

            {/* ------USING LIST GROUP------- */}
            {/* <div className="col-lg-4 overflow-hidden ">
              <ul className="list-group rounded-0 lgX">
                <li className="list-group-item active bg-success fs-5 text-center fw-medium lgT" aria-current="true">TRENDING PRODUCTS</li>

                {fdata.map((a) => (
                  <li key={a.id} className='list-group-item lgiX'> <Link className='text-decoration-none text-capitalize text-black itemX' to={`/details/${a.id}`}>{a.title}</Link> </li>
                ))}
              </ul>
            </div> */}

            <div className="col-lg-4">
              <div className="accordion rounded-0 " id="accordionExample">
                <div className="accordion-item rounded-0 ">
                  <h2 className="accordion-header rounded-0 ">
                    <button className="accordion-button text-center bg-success text-light fw-bold rounded-0 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      TRENDING PRODUCTS
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show p-0 " data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <ul className="list-group rounded-0 lgX">
                        {fdata.map((a) => (
                          <li key={a.id} className='list-group-item lgiX'> <Link className='text-decoration-none text-capitalize text-black itemX' to={`/details/${a.id}`}>{a.title}</Link> </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-8 py-3 ">

              <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={One} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={Two} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={Three} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

            </div>
          </div>

          <div className="row py-5 ">
            <div className="col-lg-12 text-center fs-2 fw-bolder main-title">
              ALL ITEMS
            </div>
            <div className="col-lg-12 py-4">
              <div className="row  align-align-items-center g-3 scroll-X">
                {data.map((a) => (
                  <div className="col-lg-3 col-md-4 col-sm-6 mt-5 d-flex justify-content-center" key={a.id}>
                    <Card
                      imag={a.thumbnail}
                      title={a.title}
                      price={a.price}
                      aid={a.id}
                      rat={a.rating}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="row py-5 ">
            <div className="col-lg-12 text-center fs-2 fw-bolder main-title">
              TOP BRANDS
            </div>
            <div className="col-lg-4">
              
            </div>
            </div>


          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home