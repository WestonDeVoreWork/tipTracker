import React from "react";
import LoginSignup from "../LoginSignup/LoginSignup";
import Logout from "../Logout/Logout";

import "./mainPage.css"

interface MainPageProps {
    sessionToken: string,
    setSessionToken: any,
    clearLocalStorage: any
}
 
interface MainPageState {
    sessionToken: string,
    setSessionToken: any
}
 
class MainPage extends React.Component<MainPageProps, MainPageState> {
    constructor(props: MainPageProps) {
        super(props);
        this.state = { sessionToken: "", setSessionToken: "" };
    }
    render() { 
        return(
            <div className="mainPageMainDiv">
                <div className="mainPageTitleBackground">
                    <p className="mainPageTitle">WELCOME TO TIP TRACKER</p>
                </div>

                <div className="mainPageDiv">
                    <div className='aboutUs'>
                        <p>Tip Tracker is designed for Uber Drivers, Doordashers, and other Deliverey Drivers who seek an easy, convenient way to track income from tips and mileage / gas expenses, and so on. 
                        No more sitting at your computer logging everything into your ridiculously clustered Excel Spreadsheet, trying to keep track of which column goes to what image.
                        No more forgetting to log it by the time you finally get home at the end of the night. This website is Mobile Friendly, so you can make a new log from anywhere (excpet while on the road, of course).</p>
                    </div>
        
                    <div className='registerLoginAccount'>
                        {/* { this.props.sessionToken ?  */}
                            <LoginSignup sessionToken={this.state.sessionToken} setSessionToken={this.props.setSessionToken} /> 
                            <Logout clearLocalStorage={this.props.clearLocalStorage}/>
                        {/* } */}
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;