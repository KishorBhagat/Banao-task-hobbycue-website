import React, { useState } from 'react'
import './hero.style.css'
import Signin from '../../forms/Signin'
import Joinin from '../../forms/Joinin'

function Hero() {
  const [signInTab, setSignInTab] = useState(true)
  return (
    <section className='hero d-flex flex-column flex-md-row'>
      <div className="hero-text justify-content-end align-items-end">
        <div>
          <h2 className='font-italic'>Explore your <span style={{ color: "#0096C8" }}>hobby</span> or <span style={{ color: "#8064A2" }}>passion</span></h2>
          <p className='mt-4'>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
          </p>
          <p>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
        </div>
      </div>
      <div className="form">
        <ul className="nav nav-underline form-tabs mb-5 justify-content-md-start justify-content-center">
          <li className="nav-item">
            <span className={`nav-link ${signInTab?"active":""}`} onClick={() => setSignInTab(true)}>Sign In</span>
          </li>
          <li className="nav-item">
            <span className={`nav-link ${!signInTab?"active":""}`} onClick={() => setSignInTab(false)}>Join In</span>
          </li>
        </ul>
        {
          signInTab ? <Signin />: <Joinin />
        }
      </div>
      <img src="images/Group.png" alt="groups" />
    </section>
  )
}

export default Hero