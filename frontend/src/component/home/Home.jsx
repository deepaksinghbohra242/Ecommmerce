import React, { useState, useEffect } from "react";
import "./Home.css";
// import "./Footer.css";

import ProductCard from "../productCard/ProductCard";
import CartImg from "../../assets/Vector (2).png";
import Carousel from "../container/Carousel";
import Logo from "../../assets/logo_web.png";
import HeroImg from "../../assets/Untitled69_20240428152145 1.png";
import CoupleImg from "../../assets/couple.png";
import ArrowImg from "../../assets/Arrow 1.png";
import BaceImg from "../../assets/5e629eaa-a3bc-4fb0-8d85-1fc597bae1c9.png.png";
import BaceImg2 from "../../assets/8badab49-5be9-4547-bd2a-d36244b0f97c.png (2).png";
import Img1 from "../../assets/8badab49-5be9-4547-bd2a-d36244b0f97c.png (3).png";
import Img2 from "../../assets/8badab49-5be9-4547-bd2a-d36244b0f97c.png (5).png";
import Img3 from "../../assets/8badab49-5be9-4547-bd2a-d36244b0f97c.png (8).png";
import Img4 from "../../assets/medicine.png";
import Img5 from "../../assets/saman.png";
import Img6 from "../../assets/pen.png";
import Img7 from "../../assets/kapde.png";
import Img8 from "../../assets/tv.png";
import Img9 from "../../assets/dabba.png";
import Img10 from "../../assets/dasta.png";
import Img11 from "../../assets/th (12) 1.png"
import img12 from "/hero.png"
import img23 from "/sitem1.png"
import Footer from "../Footer";
// import background from "./Background.png"






import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
// import { HiOutlineShoppingBag } from "react-icons/hi2";
// import { FcAbout } from "react-icons/fc";
// import { FaShop } from "react-icons/fa6";
// import { CgProfile } from "react-icons/cg";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Footer from "../Footer/Footer";


const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="hero">
          <div className="heading">
            <h1>
              PAHADI <br /> HAAT{" "}
            </h1>
            <span> Connecting you to the market</span>
            <div>
              <button>Explore</button>
            </div>
          </div>
          <img src={HeroImg} className="img-flower" alt="" />
          <img src={CoupleImg} alt="" className="overlay-image" />
        </div>
      </div>

      <div className="deals_section">
        <p>Exclusive Deals</p>
        <img src={ArrowImg} alt="" />
      </div>

      <div className="deals_img">
        <div className="img1">
          <img src={BaceImg} alt="" />
          <img src={BaceImg2} alt="" />
        </div>
        <div className="img2">
          <img src={Img1} alt="" />
        </div>
      </div>

      <div className="categories">
        <span>Categories</span>
      </div>
     

      <div className="card-container">
        {/* Repeat this block for each card */}
        <div className="card">
          <img src={Img4} alt="Image 1" />
          <p>Medicine</p>
        </div>
        <div className="card">
          <img src={Img5} alt="Image 1" />
          <p>Home Needs</p>
        </div>
        <div className="card">
          <img src={Img6} alt="Image 1" />
          <p>Books & Stationary</p>
        </div>
        <div className="card">
          <img src={Img7} alt="Image 1" />
          <p>Apparel & lifestyle</p>
        </div>
        <div className="card">
          <img src={Img8} alt="Image 1" />
          <p>Electronic & Accessories</p>
        </div>
        <div className="card">
          <img src={Img2} alt="Image 1" />
          <p>Hygiene & wellness</p>
        </div>
        {/* Repeat end */}
      </div>
      <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <Carousel />
    </div>
      <div className="local_market mt-6 ml-2">
        <span className="">Local Market</span>
      </div>

      <div className="local_mrkt mt-3">
        {/* Repeat this block for each local card */}
        <div className="local-card">
          <img src={Img3} alt="Image 1" />
          <p>Pulses</p>
        </div>
        <div className="local-card">
          <img src={Img9} alt="Image 1" />
          <p>Handicrafts</p>
        </div>
        <div className="local-card">
          <img src={Img10} alt="Image 1" />
          <p>Medicinal Herbs</p>
        </div>
        <div className="local-card">
          <img src={Img11} alt="Image 1" />
          <p>Miscellanous</p>
        </div>
        {/* Repeat end */}
      </div>
      <div className="overall flex flex-col items-center justify-start h-screen bg-cover bg-center p-10 container mx-auto overflow-x-scroll hide-scrollbar">
      <h1 className="text-3xl font-bold mb-5">Popular Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        <ProductCard
          imgSrc="./Background.png" // Adjust the path as per your file structure
          altText="Sunfeast Dark Fantasy Choco Fills"
          name="Sunfeast Dark Fantasy Choco Fills"
          description="Original Filled Cookies with Choco"
          weight="75 g"
          price="₹38"
          originalPrice="₹40"
          discount={true}
          discountLabel="5% Off"
        />
        <ProductCard
          imgSrc="path/to/nissin.jpg" // Adjust the path as per your file structure
          altText="MAGGI 2-Minute Instant Masala Noodles"
          name="MAGGI 2- Minute Instant Masala Noodles"
          description=""
          weight="140g"
          price="₹28"
          originalPrice=""
          discount={false}
        />
        <ProductCard
          imgSrc="path/to/cadbury.jpg" // Adjust the path as per your file structure
          altText="Cadbury Dairy Milk Chocolate Bar"
          name="Cadbury Dairy Milk Chocolate Bar"
          description=""
          weight="23g"
          price="₹20"
          originalPrice=""
          discount={false}
        />
        <ProductCard
          imgSrc="path/to/eastern.jpg" // Adjust the path as per your file structure
          altText="Eastern Kashmiri Chilli"
          name="Eastern Kashmiri Chilli"
          description=""
          weight="100 g"
          price="₹77"
          originalPrice="₹110"
          discount={true}
          discountLabel="30% Off"
        />
        <ProductCard
          imgSrc="path/to/pristine.jpg" // Adjust the path as per your file structure
          altText="Prolyte ORS Liquid - Orange Flavour"
          name="Prolyte ORS Liquid - Orange Flavour"
          description=""
          weight="200 ml"
          price="₹31.5"
          originalPrice=""
          discount={false}
        />
        <ProductCard
          imgSrc="path/to/dairyday.jpg" // Adjust the path as per your file structure
          altText="Dairy Day Choco Bar"
          name="Dairy Day Choco Bar"
          description=""
          weight=""
          price=""
          originalPrice=""
          discount={true}
          discountLabel="1% Off"

          
        />
        <ProductCard
          imgSrc="path/to/thumbsup.jpg" // Adjust the path as per your file structure
          altText="Thumb Up Soft Drink"
          name="Thumb Up Soft Drink"
          description=""
          weight=""
          price=""
          originalPrice=""
          discount={false}
        />
        <ProductCard
          imgSrc="path/to/lotte.jpg" // Adjust the path as per your file structure
          altText="Lotte Choco Pie"
          name="Lotte Choco Pie Chocolate Cake"
          description=""
          weight=""
          price=""
          originalPrice=""
          discount={false}
        />
        <ProductCard
          imgSrc="path/to/bingo.jpg" // Adjust the path as per your file structure
          altText="Bingo! Chilli Sprinkled Potato Chips"
          name="Bingo! Chilli Sprinkled Potato Chips"
          description=""
          weight=""
          price=""
          originalPrice=""
          discount={false}
        />
        <ProductCard
          imgSrc={img23} // img23 import should be correctly specified
          altText="Dabur Cold Pressed Mustard Oil"
          name="Dabur Cold Pressed Mustard Oil"
          description=""
          weight=""
          price=""
          originalPrice=""
          discount={false}
        />
        <ProductCard
          imgSrc={img23} // img23 import should be correctly specified
          altText="Dabur Cold Pressed Mustard Oil"
          name="Dabur Cold Pressed Mustard Oil"
          description=""
          weight=""
          price=""
          originalPrice=""
          discount={false}
        />
        <ProductCard
          imgSrc={img23} // img23 import should be correctly specified
          altText="Dabur Cold Pressed Mustard Oil"
          name="Dabur Cold Pressed Mustard Oil"
          description=""
          weight=""
          price=""
          originalPrice=""
          discount={false}
        />
      </div>
    </div>


      {/* <footer className="">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About</h3>
            <p>  
              मेरी खेती मेरी पहचान
            </p>
          </div>
          <div className="footer-section">
            <h3>Policy</h3>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Reach Us</h3>
            <div className="social-media">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>
      </footer> */}


     <Footer></Footer>
    </div>
    
  );
};

export default Home;
