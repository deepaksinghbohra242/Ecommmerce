import React, { useState, useEffect } from "react";
import "./Home.css";
import CartImg from "../../assets/Vector (2).png";
import Logo from "../../assets/pahadi haat logo.png";
import HeroImg from "../../assets/Untitled69_20240428152145 1.png";
import CoupleImg from "../../assets/couple.png";
import ArrowImg from "../../assets/Arrow 1.png";
import BaceImg from "../../assets/5e629eaa-a3bc-4fb0-8d85-1fc597bae1c9.png.png";
import BaceImg2 from "../../assets/8badab49-5be9-4547-bd2a-d36244b0f97c.png (2).png";
import Img1 from "../../assets/8badab49-5be9-4547-bd2a-d36244b0f97c.png (3).png";
import Img2 from "../../assets/8badab49-5be9-4547-bd2a-d36244b0f97c.png (5).png";
import Img3 from "../../assets/8badab49-5be9-4547-bd2a-d36244b0f97c.png (8).png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaShop } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get("http://localhost:3000/data", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <div>
      <header className="main-header">
        <div className="logo ">
          <img src={Logo} className="" alt="Logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="cart-icons">
          {isAuthenticated ? (
            <>
              <div >
                <Link to={"/item"}>
                  <HiOutlineShoppingBag />
                  <span>Item</span>
                </Link>
              </div>
              <div>
                <Link to={"/shop"}>
                  <FaShop />
                  <span>Shop</span>
                </Link>
              </div>
              <div>
                <CgProfile className=" size-7" />
                <Link to={"/profile"}>
                  <span>Profile</span>
                </Link>
              </div>
              <div>
                <img src={CartImg} alt="Logo" />
                <span>Cart</span>
              </div>
              <div>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 p-2 rounded-md"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <div className="bg-blue-600 p-2 rounded-2xl px-4">Login</div>
              </Link>
              <Link to={"/register"}>
                <div className="bg-blue-600 p-2 rounded-2xl px-4">Sign Up</div>
              </Link>
            </>
          )}
        </div>
      </header>

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
        <span>Exclusive Deals</span>
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
          <img src={Img2} alt="Image 1" />
          <p>Image 1 Name</p>
        </div>
        <div className="card">
          <img src={Img2} alt="Image 1" />
          <p>Image 1 Name</p>
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
          <p>Image 1 Name</p>
        </div>
        {/* Repeat end */}
      </div>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
