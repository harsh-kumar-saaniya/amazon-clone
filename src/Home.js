import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="banner image"
                className="home__image"
            />
            <div className="home__row">
                <Product
                    id={1234555}
                    title="This data is really resnable and when you use it you will feel the advantage of using it. Whenever you will use it you will feel a great feeeling after it"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/710vzk%2BckcL._AC_SY220_.jpg"
                />
                <Product
                    id={546987}
                    title="2020 Asus VivoBook 15 Thin & Light Laptop: 10th Gen Core i7-1065G7, 256GB SSD, 8GB RAM, 15.6 Full HD Display, Backlit Keyboard, Windows 10 "
                    price={500}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61%2Bod-bIpiL._AC_SY606_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id={548548}
                    title="NPET K10 Gaming Keyboard USB Wired Floating Keyboard, Quiet Ergonomic Water-Resistant Mechanical Feeling Keyboard, Ultra-Slim Rainbow LED Backlit Keyboard for Desktop, Computer, PC"
                    price={17.19}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61w0BypBzrL._AC_SX679_.jpg"
                />
                <Product
                    id={265587}
                    title="iConnect By Timex Classic Round Touchscreen Smartwatch with Heart Rate, Notifications and Two-Way Bluetooth Calling"
                    price={25.8}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/81NOONODBjL._AC_UX522_.jpg"
                />
                <Product
                    id={5687548}
                    title="Samsung Galaxy Note20 5G Factory Unlocked Android Cell Phone, US Version, 128GB of Storage, Mobile Gaming Smartphone, Long-Lasting Battery, Mystic Green"
                    price={999.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81uteSzwW0L._AC_SX679_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id={579845}
                    title="'Philips Brilliance 499P9H 49' SuperWide Curved Monitor, Dual QHD 5120x1440 32:9, USB-C connectivity and built-in KVM Switch, Pop-Up Webcam, Height Adjustable, LightSensor, 4Yr Advance Replacement Warr"
                    price={929.91}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/41HlKjy8a3L._AC_SL260_.jpg"
                />
            </div>
        </div>
    )
}

export default Home;
