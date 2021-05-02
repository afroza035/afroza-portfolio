import { faFacebook, faGooglePlusSquare, faLinkedin, faPinterestSquare, faTwitterSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare, faMapMarkerAlt, faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="text-center all-text-color">
        <div className="row">
        <div className="col-md-6">
          <div className="text-center">
            <h2>Contact Me</h2>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name"
                ></input>
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="info@email.com"
                ></input>
              </div>
            </div>
            <div className="col-md-5">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="contact phone"
                ></input>
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="subject"
                ></input>
              </div>
            </div>
            <div className="mb-4 col-md-10">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="message"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
          <div className="col-md-6">
            <h2>Contact Informations</h2>
            <div className="">
              <h5>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Address
              </h5>
              <p>City Gazipur 1700, Dhaka, BD</p>
            </div>
            <div className="">
              <h5>
              <FontAwesomeIcon icon={faEnvelopeSquare} /> Email
              </h5>
              <p>afroza.akter.ruma035@gmail.com</p>
            </div>
            <div className="">
              <h5>
              <FontAwesomeIcon icon={faPhoneSquareAlt} /> Phone
              </h5>
              <p>(019) 9762-7808 / (324) 234-5678</p>
            </div>
          </div>
          </div>
        <div className="row">
        <div className="text-center col-md-6">
          <button className="btn btn-outline-dark">SEND</button>
        </div>
        <div className="col-md-6">
            <h3><FontAwesomeIcon icon={faFacebook} /> <FontAwesomeIcon icon={faTwitterSquare} /><br/> <FontAwesomeIcon icon={faPhoneSquareAlt} /> <FontAwesomeIcon icon={faLinkedin} /> <FontAwesomeIcon icon={faPinterestSquare} /><br/> <FontAwesomeIcon icon={faGooglePlusSquare} /> <FontAwesomeIcon icon={faYoutubeSquare} /></h3>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
