import React from "react";
import "./about.css";
import { SiAdguard } from "react-icons/Si";
import { AiFillStar } from "react-icons/Ai";
import { BsCheckLg } from "react-icons/Bs";
import { IoIosPeople } from "react-icons/Io";

const about = () => {
  return (
    <div>
      <section className="about container">
        <div className="about-img">
          <img src="./about.png" alt="" />
        </div>
        {/*About data*/}
        <div className="about-data">
          <h2 className="heading">
            Why&nbsp;<span className="gradient-text"> Choose</span> &nbsp;Us?
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus officiis soluta quis voluptas. Explicabo repudiandae tenetur nulla voluptatibus porro enim?
          </p>   
          <div className="about-box-data">
          <div className="about-box">
            <span className="about-icon">
              <SiAdguard/> </span>
              <h3 className="box-title">Longevity</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, autem excepturi exercitationem molestiae et fugiat!</p>
          </div>
          <div className="about-box">
            <span className="about-icon">
              <AiFillStar/> </span>
              <h3 className="box-title">Heritage</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, autem excepturi exercitationem molestiae et fugiat!</p>
          </div>
          <div className="about-box">
            <span className="about-icon">
              <BsCheckLg/> </span>
              <h3 className="box-title">Quality</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, autem excepturi exercitationem molestiae et fugiat!</p>
          </div>
          <div className="about-box">
            <span className="about-icon">
              <IoIosPeople/> </span>
              <h3 className="box-title">Community</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, autem excepturi exercitationem molestiae et fugiat!</p>
          </div>     
        </div>
        </div>
      </section>
    </div>
  );
};

export default about;
