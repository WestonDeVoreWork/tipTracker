import React, { Props } from 'react'

import {
    Route,
    Link,
    Routes
} from 'react-router-dom';

import { NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem, NavbarText, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./navbar.css"

import MainPage from '../mainPage/MainPage';
import CreateTip from '../Create/CreateTip/CreateTip';
import CreateMile from '../Create/CreateMile/CreateMile';
import LoginSignup from '../LoginSignup/LoginSignup';
import Logout from '../Logout/Logout';
import UpdateTip from '../Update/UpdateTip/UpdateTip';
// import ViewPage from '../ViewPage/ViewPage';
// import ViewPage from '../ViewPage/ViewPage';
import ViewPage from '../ViewPage/Viewpage2';
import UpdateMile from '../Update/UpdateMile/UpdateMile';

interface NavbarProps {
    sessionToken: string,
    setSessionToken: any
}

interface NavbarState {
    // sessionToken: string,
    // setSessionToken: any
}

class Navbar extends React.Component<NavbarProps, NavbarState> {
    
    constructor(props: NavbarProps) {
        super(props);
        
        // this.state = { sessionToken: "", /*setSessionToken: "" */ };
    }

        render ( ) {
            return (
                <div>
                <div className='mainDivNav'>
                    {/* <div>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to="/LoginSignup">Login/Signup</Link></li>
                            <li><Link to="/View">View My Logs</Link></li>
                            <li><Link to="/LogTips">Tips</Link></li>
                            <li><Link to="/LogMileage">Mileage</Link></li>
                            <li><Link to="/UpdateTip">Update Tip</Link></li>
                            <li><Link to="/UpdateMile">Update Mile</Link></li>
                        </ul>
                    </div> */}

  <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      {/* <Link to="/">
                    <a class="nav-item" href="#">Home</a>
                </Link> */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent ">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
          <Link to="/">
            <li className="nav-item">
              <a className="nav-link" aria-current="page">
                Home
              </a>
            </li>
          </Link>

          <Link to="/View">
            <li className="nav-item">
              <a className="nav-link">View My Logs</a>
            </li>
          </Link>

          <Link to="/LogTips">
            <li className="nav-item">
              <a className="nav-link" aria-current="page">
              Log Tips
              </a>
            </li>
          </Link>

          <Link to="/LogMileage">
            <li className="nav-item">
              <a className="nav-link" aria-current="page">
              Log Mileage
              </a>
            </li>
          </Link>

          <Link to="/UpdateTip">
            <li className="nav-item">
              <a className="nav-link" aria-current="page">
              Update Tip
              </a>
            </li>
          </Link>
          
          <Link to="/UpdateMile">
            <li className="nav-item">
              <a className="nav-link" aria-current="page">
              Update Mileage
              </a>
            </li>
          </Link>

          {/* <Link to="/contact">
                        <li class="nav-item">
                        <a class="nav-link">Contact Me</a>
                        </li>
                    </Link> */}
        </ul>
      </div>
    </div>
  </nav>
</div>
                    <div>
                        <Routes>
                            <Route path='/MainPage' element={<MainPage sessionToken={this.props.sessionToken} setSessionToken={this.props.setSessionToken} />}></Route>
                            <Route path='/' element={<MainPage sessionToken={this.props.sessionToken} setSessionToken={this.props.setSessionToken}/>}></Route>
                            <Route path='/LogTips' element={<CreateTip sessionToken={this.props.sessionToken} />}></Route>
                            <Route path='/LogMileage' element={<CreateMile sessionToken={this.props.sessionToken}/>}></Route>
                            <Route path='/LoginSignup' element={<LoginSignup sessionToken={this.props.sessionToken} setSessionToken={this.props.setSessionToken} />}></Route>
                            <Route path='/UpdateTip' element={<UpdateTip sessionToken={this.props.sessionToken}/>}></Route>
                            <Route path='/UpdateMile' element={<UpdateMile sessionToken={this.props.sessionToken}/>}></Route>
                            <Route path='/View' element={<ViewPage sessionToken={this.props.sessionToken} />}></Route>
                        </Routes>
                    </div>
                    </div>
        );
        }

    }




// const Navbar = () => {
    
//     return(
//         <div className='mainDiv'>
//             <div>
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/LoginSignup">Login/Signup</Link></li>
//                     <li><Link to="/View">View My Logs</Link></li>
//                     <li><Link to="/LogTips">Tips</Link></li>
//                     <li><Link to="/LogMileage">Mileage</Link></li>
//                     <li><Link to="/UpdateTip">Update Tip</Link></li>
//                     <li><Link to="/UpdateMile">Update Mile</Link></li>
//                 </ul>
//             </div>
//             <div>
//                 <Routes>
//                     <Route path='/MainPage' element={<MainPage />}></Route>
//                     <Route path='/' element={<MainPage />}></Route>
//                     <Route path='/LogTips' element={<CreateTip />}></Route>
//                     <Route path='/LogMileage' element={<CreateMile />}></Route>
//                     <Route path='/LoginSignup' element={<LoginSignup />}></Route>
//                     <Route path='/UpdateTip' element={<UpdateTip />}></Route>
//                     <Route path='/UpdateMile' element={<UpdateMile />}></Route>
//                     <Route path='/View' element={<ViewPage />}></Route>
                    
//                 </Routes>
//             </div>
//         </div>
//     )
// }

export default Navbar;