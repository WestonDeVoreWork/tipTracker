import React, { Component, useState } from 'react';
import './App.css';

import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';

interface SessionProps {

}

interface SessionState {
  sessionToken: string,
  // setSessionToken: any
}

class App extends Component < SessionProps, SessionState > {

  constructor(props:any) {
    super(props);
    this.setSessionToken = this.setSessionToken.bind(this)
    this.state = {
      sessionToken: ''
   };
  }

  setSessionToken(setToken:string) {
    localStorage.setItem('token', setToken)
    this.setState({
        sessionToken: setToken
    })
  }

  clearLocalStorage = () => {
    localStorage.clear()
    this.setSessionToken("")
  }

  componentDidMount() {
    if(localStorage.getItem('token')){
      let token = localStorage.getItem('token')
      // setToken(localStorage.getItem('token'))
      this.setState({ sessionToken: token??""})
    }
  }

  render () {
    return (
      <div className="App">
        <Router>
          <Navbar sessionToken={this.state.sessionToken} setSessionToken={this.setSessionToken} clearLocalStorage={this.clearLocalStorage}/>
        </Router>
      </div>
    )

  }
}

// function App() {

//   const [isAdmin, setIsAdmin] = useState("");
  
//   return (
//     <div className="App">
//       <Router>
//         <Navbar token={token} />
//       </Router>
//     </div>
//   )
// }

export default App;
