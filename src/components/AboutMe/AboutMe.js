import React from "react";
import "./AboutMe.css";
import MyImg from "../../../src/images/ruma4.png";
const AboutMe = () => {
  return (
    <div className="all-text-color container d-flex justify-content-center">
      <div className="">
        <div className="offset">
          <h1>About Me</h1>
          <h6>
            A little about myself,
            <p className="interest-about">
              If you are interested to know something about me then you can read
              the info below.
            </p>
          </h6>
        </div>
        <div className="row">
          <div className="col-md-4 text-center">
            <img className="about-image" src={MyImg} alt="" />
            <button className="btn btn-outline-dark mt-4">Hire Me</button>
          </div>
          <div className="col-md-5">
            <h3>Hi there, I'm Afroza!</h3>
            <p>
              I’m a front-end developer who loves building user-friendly
              websites and web apps, enjoys writing documentation and loves
              helping people learn how to code.Most recently, I’ve been building
              web apps with React and serverless providers like Firebase and
              Netlify.I’ve always sought out opportunities and challenges that
              are meaningful to me.
              <br /> As a web developer, I enjoy using my obsessive attention to
              detail, my unequivocal love for making things,That's why I’m
              excited to make a big impact at a high growth company.
            </p>
          </div>
          <div className="col-md-3">
            <h3>Personal Info</h3>
            <p>Name : Afroza Akter</p>
            <p>Age : 20 Years</p>
            <p>Experience : +02 Years</p>
            <p>Email : afroza.akter.ruma035@gmail.com</p>
            <p>Phone : (019) 976-27808</p>
            <p>Address : Gazipur 1700, Dhaka, BD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
