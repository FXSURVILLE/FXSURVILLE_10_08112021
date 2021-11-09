import React from 'react';
// import { NavLink } from 'react-router-dom'
import '../styles/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default function SignIn () {

    return(
        <main className="main bg-dark">
          <section className="sign-in-content">
            <FontAwesomeIcon icon={faUserCircle} />
            <h1>Sign In</h1>
            <form>
              <div className="input-wrapper">
                <label for="username">Username</label
                ><input type="text" id="username" />
              </div>
              <div className="input-wrapper">
                <label for="password">Password</label
                ><input type="password" id="password" />
              </div>
              <div className="input-remember">
                <input type="checkbox" id="remember-me" /><label for="remember-me"
                  >Remember me</label
                >
              </div>
              {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
              <a href="./user.html" className="sign-in-button">Sign In</a>
              {/* <!-- SHOULD BE THE BUTTON BELOW -->
              <!-- <button className="sign-in-button">Sign In</button> -->
              <!--  --> */}
            </form>
          </section>
        </main>
    )
}