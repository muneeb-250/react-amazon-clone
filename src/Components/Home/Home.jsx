import React from 'react'
import './index.css'
import Product from '../Product/Product'

const Home = () => {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner" />
            <div className="home__row">
                <Product
                    id="124821328"
                    title="The Leap through time"
                    price={11.59}
                    rating={5}
                    image="https://cphmag.com/-/2018/11/ThreeBooks-800x533.jpg"
                />
                <Product
                    id="124821328"
                    title="The Leap through time"
                    price={11.59}
                    rating={5}
                    image="https://cphmag.com/-/2018/11/ThreeBooks-800x533.jpg"
                />
                <Product
                    id="124821328"
                    title="The Leap through time"
                    price={11.59}
                    rating={5}
                    image="https://cphmag.com/-/2018/11/ThreeBooks-800x533.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="124821328"
                    title="The Leap through time"
                    price={11.59}
                    rating={5}
                    image="https://cphmag.com/-/2018/11/ThreeBooks-800x533.jpg"
                />
                <Product
                    id="124821328"
                    title="The Leap through time"
                    price={11.59}
                    rating={5}
                    image="https://cphmag.com/-/2018/11/ThreeBooks-800x533.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="124821328"
                    title="The Leap through time"
                    price={11.59}
                    rating={5}
                    image="https://cphmag.com/-/2018/11/ThreeBooks-800x533.jpg"
                />
            </div>
        </div>
    )
}

export default Home;