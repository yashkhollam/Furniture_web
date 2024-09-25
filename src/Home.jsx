import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./image asset/poster6.jpg";
import poster2 from "./image asset/poster3.jpg";
import poster1 from "./image asset/poster1.jpg";
import poster3 from "./image asset/poster3.jpg";
import custimg1 from './image asset/customer-images/image1.jpg'
import custimg2 from './image asset/customer-images/image2.jpg'
import custimg3 from './image asset/customer-images/image3.jpg'
import custimg4 from './image asset/customer-images/image4.jpg'
// Products image

//  import sofa1 from "./image asset/products/sofa/sofa1.jpg";
import cabinet1 from './image asset/products/Cabinet/cabinet 1.avif'
// import cusion1 from './image asset/products/cusions/cusion 1.avif';
// import pantry1 from './image asset/products/pantry/pantry 1.avif'
// import Cupboard from './image asset/products/Cupboard/cupboard 1.jpeg'
import Carousel from 'react-bootstrap/Carousel';

import React, { useState } from "react";

function Home() {
 

  return (
    <div>
      <header className="header">
        <img src={Banner} alt="Banner" className="Banner" />

        <div className="heading">
        <h1 className="headingtxt2"> Affordable Luxury for Every Room</h1>
          {/* <h2 className="headingtxt1">
            Transform Your Space with Timeless Furniture Designs{" "}
          </h2> */}
          


        </div>
      </header>

      <main className="main">


        <div className="Catogerycontainer">

          <div className="prodcatogeries">

            <p className="shopbycatogerytxt">SHOP BY CATOGERY</p>
            <p className="DiscoverCategoriestxt">DISCOVER CATEGORIES</p>

            <div className="catitems">
              <div className="catitem1">
                <img
                  className="catitemicon"
                  src="https://img.icons8.com/ios/50/bed.png"
                  alt="bed"
                />
                <p className="catnametxt">BED</p>
              </div>

              <div className="catitem1">
                <img
                  className="catitemicon"
                  src="https://img.icons8.com/ios/50/table.png"
                  alt="table"
                />
                <p className="catnametxt">TABLE</p>
              </div>

              <div className="catitem1">
                <img
                  className="catitemicon"
                  src="https://img.icons8.com/ios/50/chair.png"
                  alt="chair"
                />
                <p className="catnametxt">CHAIR</p>
              </div>

              <div className="catitem1">
                <img
                  className="catitemicon"
                  src="https://img.icons8.com/external-nawicon-glyph-nawicon/64/external-table-lamp-hotel-nawicon-glyph-nawicon.png"
                  alt="external-table-lamp-hotel-nawicon-glyph-nawicon"
                />
                <p className="catnametxt">TABLE<br />LAMP</p>
              </div>

              <div className="catitem1">
                <img
                  className="catitemicon"
                  src="https://img.icons8.com/ios/50/bureau.png"
                  alt="bureau"
                />
                <p className="catnametxt">CABINET</p>
              </div>

              <div className="catitem1">
                <img
                  className="catitemicon"
                  src="https://img.icons8.com/ios-filled/50/pantry--v2.png"
                  alt="pantry--v2"
                />
                <p className="catnametxt">PANTRY</p>

              </div>

              <div className="catitem1">
                <img
                  className="catitemicon"
                  src="https://img.icons8.com/ios/50/sliding-door-closet.png"
                  alt="sliding-door-closet"
                />
                <p className="catnametxt">CUPBOARD</p>

              </div>

              <div className="catitem1">
                <img
                  className="catitemicon"
                  src="https://img.icons8.com/ios/50/dinning-room.png"
                  alt="dinning-room"
                />
                <p className="catnametxt">DINNING<br /> TABLE</p>

              </div>
            </div>
          </div>

          <div className="carouselslide">
            <p className="newariwal">NEW ARIWAL</p>
            <img width="50" height="50" className="newariwalicon" src="https://img.icons8.com/ios/50/new--v1.png" alt="new--v1" />
            <Carousel className="Carousel"> {/*taken from react bootstrap and help from blackbox */}


              <Carousel.Item>
                <img src={poster2} className="carusolimage" alt="carusolimage" />
                <Carousel.Caption>

                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={poster1} className="carusolimage" alt="carusolimage" />
                <Carousel.Caption>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={poster3} className="carusolimage" alt="carusolimage" />
                <Carousel.Caption>

                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

          </div>

          <div className="Bestsellercontainer">
            <img src="https://img.icons8.com/ios/50/best-seller.png" alt="best-seller" className="bestsellericon" />
            <h1 className="bestsellertxt">Best Seller</h1>

            <div className="bestselleritemscontainer">
              <div className="bestselleritems">
                <div>
                  <img src={cabinet1} alt="" srcset="" className="BSitem1" /></div>
              </div>

            </div>
          </div>


          <div className="customerreviewcontainer">
          <img className="customerreviewicon" src="https://img.icons8.com/external-vectorslab-glyph-vectorslab/53/external-Customer-Feedback-success-vectorslab-glyph-vectorslab.png" alt="external-Customer-Feedback-success-vectorslab-glyph-vectorslab"/>

            <h1 className="Customerreviewheadingtxt">Happy Customer</h1>

            <div className="custreviews">
              <div className="customerreview">
                <img src={custimg1} alt="custimg" className="custimg" />
                <p className="reviewername">Akhilesh Kumbhar</p>
                 <p className="reviewdate">12/09/2024</p> 
                   
               <p className="review">
                 I recently purchased the Modern Oak Coffee Table from your website and I'm absolutely thrilled with it! The quality is top-notch and it looks even better in person. The delivery was also super fast and the customer service team was very helpful. 5 stars!"
               </p>

                
              </div>

             {/*  */}
              <div className="customerreview">
                <img src={custimg2} alt="custimg" className="custimg" />
                <p className="reviewername">Prafull Khollam</p>
                 <p className="reviewdate">1/06/2024</p> 
                   
               <p className="review">
               I was a bit skeptical about buying furniture online, but your website made it so easy! The product photos and descriptions were really accurate, and the price was unbeatable. My new sofa is comfy and stylish - thanks for the great shopping experience!
               </p>

                
              </div>
  
             {/*  */}
              <div className="customerreview">
                <img src={custimg3} alt="custimg" className="custimg" />
                <p className="reviewername">Sachin Khollam</p>
                 <p className="reviewdate">7/02/2024</p> 
                   
               <p className="review">
               I had a minor issue with my order, but your customer service team went above and beyond to resolve it. They were responsive, friendly, and helpful. The furniture itself is also really well-made and looks great in my living room. Keep up the good work!

               </p>

                
              </div>

            {/*  */}
              <div className="customerreview">
                <img src={custimg4} alt="custimg" className="custimg" />
                <p className="reviewername">Swamini Khollam</p>
                 <p className="reviewdate">19/09/2024</p> 
                   
               <p className="review">
               I've been searching for the perfect dining table for ages, and yours was the best value I found. The website was easy to navigate, and the filters helped me find exactly what I was looking for. The table arrived quickly and is even more beautiful than I expected. Thanks for the excellent service!
               </p>

                
              </div>
              
             
            </div>

          </div>







        </div>

      </main>
    </div>


  );
}

export default Home;
