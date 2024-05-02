import React from 'react'
import './About.css'
import yashpal from '../../assets/yashpal.png'
import amlan from '../../assets/amlan.png'
import ashish from '../../assets/ashish.png'
import arijit from '../../assets/arijit.png'
import jasmin from '../../assets/jasmin.png'
import dkl from '../../assets/dkl.png'
import Contact from '../Contact/Contact'
const About = () => {
    return (
        <div className='about'>
            <div className='about-title'>

                <h1>We're passionate students igniting innovation
                    in Dhenkanal with the <span>first-ever</span> citywide ideathon! </h1>
                {/* <div className='all-images'>
                    <div className='one-img'>

                        <img src={yashpal} alt="" />
                        <p>Yashpal</p>
                    </div>
                    <div className='one-img'>

                        <img src={amlan} alt="" />
                        <p>Amlan</p></div>
                    <div className='one-img'>

                        <img src={ashish} alt="" />
                        <p>Ashish</p></div>
                    <div className='one-img'>

                        <img src={arijit} alt="" />
                        <p>Arijit</p></div>
                    <div className='one-img'>

                        <img src={jasmin} alt="" />
                        <p>Jasmin</p></div>
                </div> */}
            </div>
            <Contact />
            <div className='glow2'></div>
            <div className='dkl-image'>
                <img src={dkl} alt="" />
            </div>
        </div>
    )
}

export default About