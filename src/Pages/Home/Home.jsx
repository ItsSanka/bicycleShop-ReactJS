import React from "react";
import NavBar from "../../Components/NavBar/Navbar";
import Hero from "../../Components/HeroSection/Hero";
import About from "../../Components/AboutUs/About";
import Product from "../../Components/ProductSection/Product";
import Banner from "../../Components/Banner/Banner";
import Testimonial from "../../Components/TestimonialSection/Testimonial";
import Contact from "../../Components/ContactSection/Contact";
import BannerTwo from "../../Components/BannerTwo/BannerTwo";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div>
      <section className="hero-section bg-hero-pattern bg-no-repeat bg-cover">
        <div className="container">
          <NavBar></NavBar>
          <Hero></Hero>
        </div>
      </section>
      <div className="container">
        <About></About>
      </div>
      <div className="container pb-16">
        <Banner></Banner>
      </div>
      <div className="container pb-16">
        <Product></Product>
      </div>
      <div className="container">
        <Testimonial></Testimonial>
      </div>
      <div className="container">
        <BannerTwo></BannerTwo>
      </div>
      <div className="container">
        <Contact></Contact>
      </div>
      <section className="footer bg-gradient-to-r from-orange-100 to-orange-200 rounded-t-3xl pt-4">
        <div className="container pt-12 pb-8">
          <Footer></Footer>
        </div>
      </section>
    </div>
  );
}

export default Home;
