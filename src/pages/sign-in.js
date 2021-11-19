import React from 'react';
// import { NavLink } from 'react-router-dom'
import '../styles/main.css';
// import CallAPI from '../datas/API'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
// import { render } from '@testing-library/react';
import { useDispatch } from "react-redux";
import {login} from '../features/user'
import { useSelector } from "react-redux";


function SignIn() {
  let usernameInput = React.createRef();
  let passwordInput = React.createRef();
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.value)

  return(
        <main className="main bg-dark">
          <section className="sign-in-content">
            <FontAwesomeIcon icon={faUserCircle} />
            <h1>Sign In</h1>
            <form onSubmit={() => {dispatch(login({email: usernameInput.current.value, password: passwordInput.current.value}))}}>
              <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" 
                  id="username"
                  name="username"
                  required 
                  ref={usernameInput}/>
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password"
                  id="password"
                  name="password"
                  required
                  ref={passwordInput}/>
              </div>
              <div className="input-remember">
                <input type="checkbox" id="remember-me"/>
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <button className="sign-in-button">Sign In</button>
            </form>
            <h1>{user.email}</h1>
            <h1>{user.password}</h1>
          </section>
        </main>
  )
}
console.log()
// class SignIn extends React.Component {

//   constructor (props) {
//     super (props)
//     this.state={
//       email: '',
//       password: '',
//       // checkbox: false
//     }
//     this.handleChange=this.handleChange.bind(this)
//     this.handleSubmit=this.handleSubmit.bind(this)
//   }

//   handleChange (e) {
//     const name=e.target.name
//     // const type=e.target.type
//     // const value = type === "checkbox" ? e.target.checked : e.target.value
//     this.setState({
//       [name]: e.target.value
//     })
//   }

//   handleSubmit (e) {
//     e.preventDefault()
//     const body = this.state
//     CallAPI.login(body).then(data=> console.log(data.data.body.token))
//   }

//   render() {
    
//     console.log(this.state)
//     return(
//         <main className="main bg-dark">
//           <section className="sign-in-content">
//             <FontAwesomeIcon icon={faUserCircle} />
//             <h1>Sign In</h1>
//             <form onSubmit={this.handleSubmit}>
//               <div className="input-wrapper">
//                 <label htmlFor="username">Username</label>
//                 <input type="text" 
//                   id="username" 
//                   name="email" 
//                   value={this.state.email} 
//                   onChange={this.handleChange}/>
//               </div>
//               <div className="input-wrapper">
//                 <label htmlFor="password">Password</label>
//                 <input type="password"
//                   id="password"
//                   name="password"
//                   value={this.state.password}
//                   onChange={this.handleChange}/>
//               </div>
//               <div className="input-remember">
//                 <input type="checkbox" id="remember-me"/>
//                 {/* replace checkbox if react management needed */}
//                 {/* <input type="checkbox" 
//                   id="remember-me"
//                   name="checkbox"
//                   checked={this.state.checkbox}
//                   onChange={this.handleChange}/> */}
//                 <label htmlFor="remember-me">Remember me</label>
//               </div>
//               {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
//               <button className="sign-in-button">Sign In</button>
//               {JSON.stringify(this.state)}
//               {/* <!-- SHOULD BE THE BUTTON BELOW -->
//               <!-- <button className="sign-in-button">Sign In</button> -->
//               <!--  --> */}
//             </form>
//           </section>
//         </main>
//     )
//   }
// }
 export default SignIn