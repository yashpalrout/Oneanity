import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.png'
import Contact from '../Contact/Contact'


const Hero = () => {
    return (
        <div className='hero'>

            <h1>Tired of <span className='boring' style={{ color: 'white' }}>boring</span> ? Let's make awesome!
                Join the craziest <span className=''>ideathon</span> ever!</h1>
            <div className='hero-connect'>Register</div>
            <div className='glow1'></div>
            {/* <img src={profile_img} alt="" /> */}
            <div className='intro'>
                <div className='intro-heading'>
                    <h1>ideathon</h1>
                </div>
                <div className='intro-content'>
                    <p>Ideathons are intensive <span>brainstorming events </span>
                        where individuals from different backgrounds, <span>skills </span>
                        and <span>interests </span>  converge to diagnose predefined problems, identify the best
                        opportunities and ideate the <span>most viable solution</span> .</p>
                </div>
            </div>
            {/* <Contact />               */}
        </div >
    )
}

export default Hero