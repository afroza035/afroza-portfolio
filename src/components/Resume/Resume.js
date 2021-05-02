import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="all-text-color">
      <div className="container d-block">
        <h1>Resume</h1>
        <div className="">
          <a
            href="https://drive.google.com/file/d/1u4juDIuevZ8d9ndxxs1myp-HvabqTQot/view?usp=sharing"
            target="_blank"
            className="btn btn-outline-dark"
          >
            <FontAwesomeIcon icon={faDownload} /> DOWNLOAD RESUME
          </a>
        </div>
        <div className="all-text-color">
          <h2>SKILLS</h2>
          <h3>JUST MY AWESOME SKILLS</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu
            ultrices libero. Curabitur vulputate vestibulum elementum.
            Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac
            purus dignissim
          </p>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="number">
                <h2>
                  90<span>%</span>
                </h2>
              </div>
            </div>
            <h2 className="text">Html</h2>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="number">
                <h2>
                  85<span>%</span>
                </h2>
              </div>
            </div>
            <h2 className="text">CSS</h2>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="number">
                <h2>
                  60<span>%</span>
                </h2>
              </div>
            </div>
            <h2 className="text">Javascript</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
