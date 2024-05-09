import React, { useState, useEffect } from "react";
import "./Home.css";
import CartImg from "../../assets/Vector (2).png";

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







import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FcAbout } from "react-icons/fc";
import { FaShop } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import axios from "axios";

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

      <div className="local_market">
        <span>Local Market</span>
      </div>

      <div className="local_mrkt">
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

      <footer className="">
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
      </footer>
    </div>
  );
};

export default Home;
