import './Products.css';
import React,{useState} from "react";


import dtable1 from './image asset/products/dining table/dtable1.jpg'
import Chair1 from './image asset/products/chair/chair1.jpg'
import sofa1 from './image asset/products/sofa/sofa1.jpg';
import sofa2 from './image asset/products/sofa/sofa2.jpg';
import dtable2 from './image asset/products/dining table/dtable2.jpg';
import chair3 from './image asset/products/chair/chair3.jpg';
import sofa3 from './image asset/products/sofa/sofa3.jpg';
import dtable3 from './image asset/products/dining table/dtable3.jpg';
import chair4 from './image asset/products/chair/chair4.jpg';
 

function Products(){
 const [cart,setCart]= useState(0);
     
    return(
        <div>
             <div className="orderOnline"> 
             <div className='cart'><i class="bi bi-cart"></i> {cart}</div> 
             <button  className='removecart' onClick={()=> setCart (cart>0 ?cart-1:0)}><i class="bi bi-trash3-fill"></i></button>

     <div className="ordercategory">
       <p className="orderfoodtxt">Explore Our Collection</p> 
        
        <div className="orderitems">          
            <div className="orderitem1">
                
              <img src={dtable1} alt="" className="foodimg"/>
               
               <p className="discount">Flat 10% OFF</p> 
               <p className="brandname">Dinning   Table</p>
               <p className="rating">3.9</p>
                <p className="discription">Comfort for You</p> 
                 
                 <button  className='addtocart' onClick={()=> setCart (cart+1)}>Add to cart</button>

                <p className="price">₹30000</p>
             
            </div>

          
            <div className="orderitem2">
                <img src={ Chair1} alt="" className="foodimg"/> 
               <p className="brandname">Chair</p>
               <p className="rating">3.9</p>
                <p className="discription">Comfort for You</p> 
                <p className="price">₹3500</p>
             
              </div>

              
              <div className="orderitem3">
                <img src={sofa1} alt="" className="foodimg"/> 
                <p className="discount">Flat 15% OFF</p> 
               <p className="brandname">sofa</p>
               <p className="rating">5.0</p>
                <p className="discription">Comfort for You</p> 
                <p className="price">₹30000</p>
              
              </div>

            
              <div className="orderitem4">
                <img src={sofa2} alt="" className="foodimg"/>
                <p className="discount">Flat 15% OFF</p> 
                <p className="brandname">sofa </p>
                <p className="rating">3.9</p>
                 <p className="discription">Comfort for You</p> 
                 <p className="price">₹150000</p>
              
              </div>
            
              <div className="orderitem5">
                <img src={dtable2} alt="" className="foodimg"/> 
                <p className="discount">Flat 5% OFF</p>  
               <p className="brandname">Dinning Table</p>
               <p className="rating">2.0</p>
                <p className="discription">Comfort for You</p> 
                <p className="price">₹80000</p>
             
              </div>
        

              <div className="orderitem6">
                <img src={chair3} alt="" className="foodimg"/>  
                <p className="discount">Flat 20% OFF</p> 
                <p className="brandname">chair</p>
                <p className="rating">4.5</p>
                 <p className="discription">Comfort for You</p> 
                 <p className="price">₹7000</p>
              
                  
              </div>

              

              <div className="orderitem7">
                <img src={ sofa3 } alt="" className="foodimg"/> 
                <p className="discount">Flat 20% OFF</p> 
                <p className="brandname"> sofa</p>
                <p className="rating">4.0</p>
                 <p className="discription">Comfort for You</p> 
                 <p className="price">₹50000</p>
              
              </div>


              <div className="orderitem7">
                <img src={dtable3} alt="" className="foodimg"/> 
                <p className="discount">Flat 20% OFF</p> 
                <p className="brandname">Dinning Table</p>
                <p className="rating">4.0</p>
                 <p className="discription">Comfort for You</p> 
                 <p className="price">₹130000</p>
              
              </div>

              <div className="orderitem7">
                <img src={chair4} alt="" className="foodimg"/> 
                <p className="discount">Flat 20% OFF</p> 
                <p className="brandname">Chair</p>
                <p className="rating">4.0</p>
                 <p className="discription">Comfort for You</p> 
                 <p className="price">₹13000</p>
              
              </div>
        </div>
     </div>
    </div>
        </div>
    );
}

export default Products;