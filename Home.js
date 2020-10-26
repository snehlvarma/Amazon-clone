import React from 'react';
import "./Home.css";
import Product from "./Product.js"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
           <img
              className="home__image" 
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt=""
            />
    
       <div className="home__row">
       <Product 
         id="43256789"
         title="The lean startup"
         price={19.99}
         image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"
         rating={5}
         />

       <Product
        id="12343456" 
        title="Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)"
        price={239.11}
        image="https://images-na.ssl-images-amazon.com/images/I/51ae8jtSakL._SL1200_.jpg"
        rating={4}     
       />
       </div>

       <div className="home__row">
       <Product
        id="23445930" 
        title="Amazon Echo (3rd generation) smart speaker with Alexa, Charcoal Fabric"
        price={98.99}
        rating={5}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrirMr7xeBQFb-Q0-AUxob620W-5ANOXy7lcpjDPlKmfAusuiu32uEWzuBBGLUfa85EMtjtWWg&usqp=CAc"
       />

       <Product
       id="23445931" 
       title="Fitbit Versa Smartwatch, Gray/Silver Aluminium, One Size (S & L Bands Included) "
       price={60.99}
       rating={3}
       image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThkiKqp5Sq_HVD77CPaZnmMB0mTZTrWIMzPpCz6k-glTlnCxYImtYCzmwD80s&usqp=CAc"
        />



       <Product 
        id="23445932" 
        title="New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 1TB) - Silver (4th Generation) - Space Grey "
        price={120.99}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/81sL%2Bb9%2BCtL._SX569_.jpg"        
       
       />
       
    </div>

    
       <div className="home__row">
       <Product
       
       id="23645932" 
       title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
       price={1900.99}
       rating={4}
       image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SL1500_.jpg"
       
       
       
       />
    

       </div>
       </div>
    </div>
    )
}

export default Home;
