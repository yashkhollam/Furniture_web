import "../CSS/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Link, } from "react-router-dom";
import poster from "./image asset/poster.jpg";
import home1_cate1 from './image asset/chair/home1_cate1.jpg';
import home1_cate2 from './image asset/table/home1_cate2.jpg';
import cabinet9 from './image asset/trending product/cabinet9.jpg'
import chair8 from './image asset/trending product/chair8.jpg';
import trend1 from "./image asset/trending product/img1.jpg";
import trend2 from "./image asset/trending product/img2.jpg";
import trend3 from "./image asset/trending product/img3.jpg";
import trend4 from "./image asset/trending product/img4.jpg";
import cust1 from './image asset/customer img/cust1.jpg';
import cust2 from './image asset/customer img/cust2.jpg';
import cust3 from './image asset/customer img/cust3.jpg';
import cust4 from './image asset/customer img/cust4.jpg'
import cubord1 from './image asset/Cupboard/cupboard 1.jpeg'
import table3 from './image asset/table/table3.webp';
import pantry1 from './image asset/pantry/pantry 1.avif';
import cabinet1 from './image asset/Cabinet/cabinet 1.avif';
import tlamp from './image asset/table lamp/tlamp (1).avif';
import sofa from './image asset/sofa/sofa2.jpg'
import React, { useState, } from "react";

function Home() {
  const [value, setValue] = React.useState(4);
  return (
    <div>
      <header>
        <img src={poster} alt="" className="poster" />
        <div className="postertagline1">
          <span className="tagword1">Transform</span>Your Space,
          <br />
          Elevate Your <span className="tagword2">Style!</span>
          <p className="posterlines2">
            Discover a stunning selection of high-quality furniture <br />
            designed to elevate your home. S for exclusive <br />
            deals and expert tips to create your perfect space.
            <br /> Experience style, comfort, and value all in one place
          </p>
          <button className="buynowbtn">Buy now</button>
        </div>
      </header>

      <main className="main">{/*}
       
        
         <section className="newarivalsec">
            <p className="newarivaltxt"> New Furniture Arival</p>
            <div className="containersec">
             
              <div className="containersec1">
                <img src={cubord1} alt="" className="containersecimg1"/>
              </div>
              <div className="containersec1">
                <img src={table3} alt="" className="containersec2"/>
              </div>
              <div className="containersec1">
                <img src={pantry1} alt="" className="containersecimg1"/>
              </div>

              <div className="containersec1">
                <img src={cabinet1} alt="" className="containersecimg1"/>
              </div>
              <div className="containersec1">
                <img src={tlamp} alt="" className="containersecimg1"/>
              </div>
            </div>
         </section>
         
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
</div>



      */}
      <div className="fursec">
        <Link to='/Axios'>
        <img src={home1_cate1} alt="" className="home1_cate1img1" />
        <p className="stooltxt">Stools</p>
        </Link> 

         <Link to={'./Axios.js'}>
        <img src={home1_cate2} alt="" className="home1_cate1img1" />
        <p className="stooltxt">Sofas</p>
        </Link> 
       </div> 

      <section className="trendingprosec">
       <p className="trendingtxt">Treending Product of the Week</p>

<div className="trendingproductsec">
  <div className="productcontainer">
    <img src={trend1} className="trendimg" alt="" />
    <p className="ternaddtocart">At to Cart</p>
    <Rating name="read-only" value={value} readOnly />
    <Link to='./axios.js' className="trendsecproname">
    <p className="trendsecpronametxt">Miro Dining Table</p>
    <p className="trendsecproprice">₹ 20,000 </p>

    </Link>
  </div>
 
 
  <div className="productcontainer">
    <img src={trend2} className="trendimg" alt="" />
    <p className="ternaddtocart">At to Cart</p>
    <Rating name="read-only" value={value} readOnly />
     <Link to={'./axios.js'}>
     <p className="trendsecproname"> Teapot </p>
     <p className="trendsecproprice">₹ 5,000 </p>
     </Link>
  </div>
  
  
  <div className="productcontainer">
    <img src={trend3} className="trendimg" alt="" />
    <p className="ternaddtocart">At to Cart</p>
    <Rating name="read-only" value={value} readOnly />
    <Link to={'./axios.js'}>        
       <p className="trendsecproname">Table Lamp </p> 
       <p className="trendsecproprice">₹ 6,000 </p>           
    </Link>
  </div>
  
  <div className="productcontainer">
    <img src={trend4} className="trendimg" alt="" 
    />
    <p className="ternaddtocart">At to Cart</p>
    
    <Rating name="read-only" value={value} readOnly />
     <Link to={'./axios.js'}>
     <p className="trendsecproname"> Discus Floor lamp</p>
     <p className="trendsecproprice">₹ 4,000 </p>
     </Link>
  </div>
  
 
</div>
</section>
<section className="section">
  <div className="freeshipsec">
    <img src={cabinet9} alt="" className="freeshipsecbanner"/>
    <p className="freeshipsectxt1">Enjoy Free Shipping</p>
    <p className="freeshipsectxt2">The Best <br/>
    Cabinets & <span className="chestsword">Chests</span></p>
    <div className="buynowsectionhome">
    <Link to={"./axios.js"}>
    <p className="freeshipsectxt3">Buy Now</p>
    <i class="bi bi-cart-check"></i>
    </Link>
    </div>
    
  </div>
</section>

<section className="section2">
<div className="newprosec">
    <img src={chair8} alt="" className="newprosecimgbanner"/>
     <p className="newprosecimgbannertxt1">NEW PRODUCTS</p>
    <p className="newprosecimgbannertxt2">The CHAIR <span className="collectionword">COLLECTION</span></p> 
     <div className="buynowsectionhome">
    <Link to={"./axios.js"}>
    <p className="newprosecimgbannertxt3">SEE MORE</p>
    <i class="bi bi-cart-check"></i>
    </Link>  
    </div>
    
  </div>
</section>


<section className="section3">
  <div className="customerreviewcontainer">
          {/* <img className="customerreviewicon" src="https://img.icons8.com/external-vectorslab-glyph-vectorslab/53/external-Customer-Feedback-success-vectorslab-glyph-vectorslab.png" alt="external-Customer-Feedback-success-vectorslab-glyph-vectorslab"/> */}

            <div className="Customerreviewheadingtxt">Happy <span className="customertxt"> Customer</span></div>

            <div className="custreviews">
              <div className="customerreview">
                <img src={cust1} alt="custimg" className="custimg" />
                <p className="reviewername">Akhilesh Kumbhar</p>
                 <p className="reviewdate">12/09/2024</p> 
                   
               <p className="review">
                 I recently purchased the Modern Oak Coffee Table from your website and I'm absolutely thrilled with it! The quality is top-notch and it looks even better in person. The delivery was also super fast and the customer service team was very helpful. 5 stars!"
               </p>

                
              </div>

             
       <div className="customerreview">
                <img src={cust3} alt="custimg" className="custimg" />
                <p className="reviewername">Prafull Khollam</p>
                 <p className="reviewdate">1/06/2024</p> 
                   
               <p className="review">
               I was a bit skeptical about buying furniture online, but your website made it so easy! The product photos and descriptions were really accurate, and the price was unbeatable. My new sofa is comfy and stylish - thanks for the great shopping experience!
               </p>

                
              </div> 

      
       <div className="customerreview">
                <img src={cust2} alt="custimg" className="custimg" />
                <p className="reviewername">Sachin Khollam</p>
                 <p className="reviewdate">7/02/2024</p> 
                   
               <p className="review">
               I had a minor issue with my order, but your customer service team went above and beyond to resolve it. They were responsive, friendly, and helpful. The furniture itself is also really well-made and looks great in my living room. Keep up the good work!

               </p>

                
              </div>

            
         <div className="customerreview">
                <img src={cust4} alt="custimg" className="custimg" />
                <p className="reviewername">Swamini Khollam</p>
                 <p className="reviewdate">19/09/2024</p> 
                   
               <p className="review">
               I've been searching for the perfect dining table for ages, and yours was the best value I found. The website was easy to navigate, and the filters helped me find exactly what I was looking for. The table arrived quickly and is even more beautiful than I expected. Thanks for the excellent service!
               </p>

                
              </div>
              
             
            </div>  

          </div>
          </section>
      </main>

      <footer className="footer">
        
          <div className="footersec">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0560018731985!2d73.83999187465226!3d18.526371268998197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1ad300ecf13%3A0xbaf7f04ff053ace7!2sFullstack%20Guru!5e0!3m2!1sen!2sin!4v1733818414592!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
             <div className="aboutsec">
          <ul  id="headingtxt"> ABOUT US</ul>
          <ul className="customerserlist" >Our Story</ul>
          <ul className="customerserlist" >Careers</ul>
          <ul className="customerserlist" >Influencers</ul>
          <ul className="customerserlist" > Join our teams
            </ul>
          
        </div>

        <div className="customerservicesec">
          <ul className="custserlist" id="headingtxt"> CUSTOMER SERVICES</ul>
          <ul className="customerserlist" >Contact Us</ul>
          <ul className="customerserlist" >Customer Services</ul>
          <ul className="customerserlist" >Find Store</ul>
          <ul className="customerserlist" > Book Appointment
            </ul>
          <ul className="customerserlist" > Shipping & Returns
            </ul>
          
        </div>


        <div className="emailsec">
          <ul className="emailheading" id="headingtxt"> SIGN UP FOR EMAIL</ul>
          <ul className="custoneremailheadingtxt" >Enjoy 15% off* your first order when sign up</ul>
          <ul className="customerserlist" >
           
           <div className="inputfiledsec">
            <input type="text" className="footeremailsec" placeholder="Your e-mail address"/>
           <button type="button" className="footeremailbtn">Subscribe</button></div>

           <div className="socialicon">
            <Link to='https://www.instagram.com/yashkhollam.7/'> <i class="bi bi-instagram"></i></Link>
           <Link to='https://github.com/yashkhollam?tab=repositories'> <i class="bi bi-github"></i></Link>
           <i class="bi bi-threads"></i>
           <i class="bi bi-facebook"></i>
           
           </div>
          </ul>
          {/* <ul className="customerserlist" >Find Store</ul> */}
         
          
        </div>
        </div> 
      </footer>

      
       
          {/* <div className="carouselslide">
            <p className="newariwal">NEW ARIWAL</p>
            <img width="50" height="50" className="newariwalicon" src="https://img.icons8.com/ios/50/new--v1.png" alt="new--v1" />
            <Carousel className="Carousel"> {/*taken from react bootstrap and help from blackbox  */}

      {/* <Carousel.Item>
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


         






        </div>

      </main> */}
    </div>
  );
}

export default Home;
