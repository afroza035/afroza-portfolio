import React from 'react';
import './Home.css';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ruma from '../../../images/ruma.png'
const Home = () => {
    return (
            <main style={{height:'500px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1 text-center">
                <img className="img-style img-fluid" src={ruma} alt=""/>
            </div>
            <div className="col-md-6 sign-name">
                <h6 style={{color: '#3A4256'}}>Web Developer</h6>
                <p className="text-secondary">Hi, I'm Afroza, a very passionate, hardworking Web Developer. My experienced in HTML , CSS, JavaScript and different framework like React, Js, Material UI, Bootstrap etc. I will be able to perform in any kind of situation with full effort to utilize my knowledge, skill and experience for professional career development and to gain confidence and fame using my potential in the field of "Web Development" .</p>
                <h4>ruma</h4>
                <a href="https://drive.google.com/file/d/1u4juDIuevZ8d9ndxxs1myp-HvabqTQot/view?usp=sharing" target="_blank" className="btn btn-outline-dark"><FontAwesomeIcon icon={faDownload} /> DOWNLOAD RESUME</a>
            </div>
        </main>
    );
};

export default Home;