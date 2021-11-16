import React from 'react'
import { BrowserRouter} from 'react-router-dom'
// import Router from './router/Router'
import Header from './components/Header'
import Footer from './components/Footer'
// import Home from './pages/Home'
import SignIn from './pages/sign-in'
// import User from './pages/user'
const token=''
const handleSubmit = (e) => {
  e.preventDefault();
  const login = { token };
  
  fetch("http://localhost:3001/user/signup", {
    method: "POST",
    headers: { 
      "email": "tony@stark.com",
      "password": "password123"
    },
    body: JSON.stringify(login)
  }).then(()=>{
    console.log(token)
  })
}

class App extends React.Component{
  render (){
    return (
      <div className='ArgentBank'>
      <BrowserRouter>
        <Header />
        {/* <Router /> */}
        {/* <Home /> */}
        <SignIn />
        {/* <User /> */}
        <Footer />
      </BrowserRouter>
      </div>
    )
  }
}
export default App;