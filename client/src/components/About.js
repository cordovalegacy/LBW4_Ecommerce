import React from 'react';
import { Link } from 'react-router-dom';
import Hawaii from '../img/hawaii.jpg';
import Wedding from '../img/wedding.jpg';
import Hana from '../img/hawaii2.jpg';
import Dogs from '../img/dogs.jpg';
import AboutLogo from '../img/aboutlogo.jpg';

const About = () => {
    return (
        <div className='about-main'>
            <h2 id='about-us-content-header'>Why Legacy Builds?</h2>
            <div className='about-container'>
                <h2 id='about-mission'>Our purpose is to collide science and art into something you can touch, enjoy, and smile about! Legacy Builds LLC. is a custom computer business with a focus on building a community of technology lovers, one desktop at a time</h2>
                <div id='about-wrapper'>
                    <h3 id='about-reviews'>"Incredible service"</h3>
                    <h3 id='about-reviews'>"One hell of a present for my kiddo's graduation"</h3>
                    <h3 id='about-reviews'>"Wouldn't have been possible without the care and attention Brendan brings to his work and customers"</h3>
                    <h3 id='about-reviews'>"Legacy Builds helped me elevate my business performance by building me something that could handle the workload!"</h3>
                </div>
            </div>
            <br />
            <div className='about-container-2'>
                <div id='about-style-1'>
                    <h3 id='about-headers'>Contact Us</h3>
                    <p id='about-contact-info'>Owner, Builder, Tech Support: Brendan Cordova</p>
                    <p id='about-contact-info'>Phone: (425)385-9807</p>
                    <p id='about-contact-info'>Email: legacybuildspc@gmail.com</p>
                </div>
                <div id='about-style-2'>
                    <h3 id='about-headers-2'>Questions? We are here to support you.</h3>
                    <p>Check out our FAQ's!</p>
                    <Link to='/computers/faq'>Frequently Asked Questions</Link>
                </div>
                <div id='about-style-1'>
                    <h3 id='about-headers'>Hours</h3>
                    <p>We operate as a remote business, so we are always available by text message or email</p>
                    <p>Unsure about what you want? Schedule a phone call!</p>
                </div>
            </div>
            <h2 id='about-us-header'>About us</h2>
            <div className='about-me-wrapper'>
                <div id='about-me-content'>
                    <h3 id='about-me-content-header'>Hi! I'm Brendan</h3>
                    <h3 id='about-me-content-paragraph'>I am the owner and founder of Legacy Builds, LLC.</h3>
                </div>
                <div id='about-me-photo'>
                    <img id='about-image' src={Hawaii} alt="hawaii" />
                </div>
            </div>
            <div className='about-me-wrapper'>
                <div id='about-me-photo'>
                    <img id='about-image' src={Wedding} alt="wedding" />
                </div>
                <div id='about-me-content'>
                    <h3 id='about-me-content-paragraph-2'>I am a Husband, and a Brother.</h3>
                    <p id='about-me-content-paragraph-description'>Happily married for over six years to my beautiful wife Tori. And a proud older sibling, to my late little brother, Tristan.</p>
                </div>
            </div>
            <div className='about-me-wrapper'>
                <div id='about-me-content'>
                    <h3 id='about-me-content-paragraph-2'>I am a computer hardware and software specialist, a software developer, and a garbage truck driver</h3>
                    <p id='about-me-content-paragraph-description-header'>I know, a weird combination, but one thing all my occupations have in common is my love for machines!</p>
                    <p id='about-me-content-paragraph-description'>I have built over fifty new desktops, repaired over seventy, and have performed technical support on well over a hundred resolved issues.</p>
                    <p id='about-me-content-paragraph-description'>I specialize in the MERN stack, believe it or not... I built this whole website!</p>
                    <p id='about-me-content-paragraph-description'>I have been a commercial driver for the last five years, and yes "learn to code" is applicable.</p>
                </div>
                <div id='about-me-photo'>
                    <img id='about-image-long' src={Hana} alt="r2Hana" />
                </div>
            </div>
            <div className='about-me-wrapper'>
                <div id='about-me-photo'>
                    <img id='about-image' src={Dogs} alt="dogs" />
                </div>
                <div id='about-me-content'>
                    <h3 id='about-me-content-paragraph-2'>Two little ones, Charlie and Bella!</h3>
                    <p id='about-me-content-paragraph-description'>One looks like a teddy bear, and one looks like a rat...but they're our little family.</p>
                    <br />
                    <h3 id='about-me-content-paragraph-2'>What is important to me? Who I am? Why should you care?</h3>
                    <p id='about-me-content-paragraph-description'>I am nothing special. I am a man who loves technology, learning, and growing.</p>
                    <p id='about-me-content-paragraph-description'>I am a proud and greateful American. I love camping, wildlife, and cooking over a campfire. I yearn to be better every waking moment of my life. I love my friends, family, and community. And I want to impact everything and everyone around me with technology!</p>
                </div>
            </div>
            <div className='about-me-wrapper'>
                <div id='about-me-content'>
                    <h2>Thanks for stopping by!</h2>
                </div>
                <div id='about-me-photo'>
                    <img id='about-image' src={AboutLogo} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default About;