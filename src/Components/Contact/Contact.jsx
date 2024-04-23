import React from 'react'
import './Contact.css'
import mail from '../../assets/email.png'
import phone from '../../assets/telephone.png'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-title'>
                <h2>Get in touch</h2>
                <div className='contact-section'>
                    <div className='contact-left'>
                    {/* <h1> let's talk</h1> */}
                        <div className='contact-details'>
                            <div className='contact-detail'>
                                <img src={mail} alt='' />
                                <p>oneanity@gmail.com</p>
                            </div>

                            <div className='contact-detail'>
                                <img src={phone} alt='' />
                                <p>+91-9337283670</p>
                            </div>
                        </div>
                    </div>
                </div>
                <form className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type='email' placeholder='Enter your email' name='email' />
                    <lable htmlFor='' >Write your message here</lable>
                    <textarea name='message' rows='8' placeholder='Enter your message' />
                    <button type='submit' className='contact-submit'>Send</button>
                </form>

            </div>
        </div>
    )
}

export default Contact