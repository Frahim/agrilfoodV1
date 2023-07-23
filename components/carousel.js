"use client";
import { useState } from "react";
//import { items } from "../public/Items.json";
import items from "../public/Items.json";
//import pim from "../public/cabbage-balashi-large.jpg";
// import waterlemon from '../public/watermelon.jpg';
// import cucumber from '../public/cucumber.jpg'

import Image from "next/image";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../components/carosul.madule.css";
import { Carousel } from '@trendyol-js/react-carousel';

export default function BootstrapCarousel({ }) {

  return (
    <div className="carosulWrapper">
      <div className="container">
        <div className="titlesexction">
          <h2 className="blogTitle text-center mb-5">Our News and Events</h2>
        </div>
        <Carousel className="mycar" show={3} slide={3} swiping={true} autoPlay={true}>
          <div className="itemwrwpper">
            {/* <Image width={300} height={300} src={pim} alt="Post Image"/> */}
            <h2 className="postTitle">Post title 1</h2>
          </div>
          <div className="itemwrwpper">
            {/* <Image width={300} height={300} src={waterlemon} alt="Post Image"/> */}
            <h2 className="postTitle">Post title 2</h2>
          </div>
          <div className="itemwrwpper">
            {/* <Image width={300} height={300} src={cucumber} alt="Post Image" /> */}
            <h2 className="postTitle">Post title 3</h2>
          </div>
          <div className="itemwrwpper">
            {/* <Image width={300} height={300} src={pim} alt="Post Image" /> */}
            <h2 className="postTitle">Post title 4</h2>
          </div>
          <div className="itemwrwpper">
            {/* <Image width={300} height={300} src={waterlemon} alt="Post Image"/> */}
            <h2 className="postTitle">Post title 5</h2>
          </div>
          <div className="itemwrwpper">
            {/* <Image width={300} height={300} src={cucumber} alt="Post Image" /> */}
            <h2 className="postTitle">Post title 6</h2>
          </div>

        </Carousel>
      </div>
    </div>

  );
}
