import React from "react";
import "./Projects.css";
import Cosmetics from "../../images/Cosmetics.PNG";
import Kids from "../../images/kids.PNG";
import Ride from "../../images/ride.PNG";
import Royal from "../../images/royal.PNG";
import Emajhon from "../../images/ema-jhon.PNG";
const Projects = () => {
  return (
    <section className="container d-flex justify-content-center">
      <div className="text-center project-style all-text-color mt-5">
        <h2>My Project</h2>
        <div className="text-center mt-3">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src={Cosmetics} alt="" className="img-fluid" />
                <div className="">
                  <h2 className="">Cosmetics Shop</h2>
                  <p className="">
                    Duration: 25 days
                  </p>
                  <p>mongodb|express|react|etc.</p>
                  <a href="https://beauty-cosmetics-f5d4e.web.app/">see more</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card">
                  <img src={Kids} alt="" className="img-fluid" />
                  <div className="">
                    <h2 className="">Kids Day Care</h2>
                    <p className="">
                      Duration: 20 days
                    </p>
                    <p>firebase|mongodb|react-router|etc.</p>
                    <a href="https://kids-day-care-7aeee.web.app/">see more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={Emajhon} alt="" className="img-fluid" />
                <div className="">
                  <h2 className="">Ema Jhon</h2>
                  <p className="">
                    Duration: 30 days
                  </p>
                  <p>mongodb|react-dom|hook|etc.</p>
                  <a href="https://pensive-lewin-c7735c.netlify.app/">
                    see more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-2">
              <div className="card">
                <img src={Ride} alt="" className="img-fluid" />
                <div className="">
                  <h2 className="">DreamLand Ride</h2>
                  <p className="">
                    Duration: 10 days
                  </p>
                  <p>js|react-router|firebase|etc</p>
                  <a href="https://dreamland-voyage.web.app/">see more</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-2">
              <div className="card">
                <img src={Royal} alt="" className="img-fluid" />
                <div className="">
                  <h2 className="">Royal League</h2>
                  <p className="">
                    Duration: 7 days
                  </p>
                  <p>js|html|css|bootstrap|etc</p>
                  <a href="https://awesome-curran-c40490.netlify.app/">
                    see more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
