import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
// import SignIn from './pages/sign-in'
// import User from './pages/user'
import Footer from './components/Footer'


class App extends React.Component{
  render (){
    return (
      <div className='sportSee'>
      <BrowserRouter>
        <Header />
        <Home />
        {/* <SignIn /> */}
        {/* <User /> */}
        <Footer />
      </BrowserRouter>
      </div>
    )
  }
}
export default App;