import React from "react";
import Login from "./Login";
import Signup from "./Signup";

interface LoginSignupProps {
    sessionToken: string,
    setSessionToken: any
}
 
interface LoginSignupState {
    sessionToken: string,
    setSessionToken: any,
    
}
 
class LoginSignup extends React.Component<LoginSignupProps, LoginSignupState> {
    constructor(props: LoginSignupProps) {
        super(props);
        this.state = { sessionToken: "", setSessionToken: "" };
    }
    render() { 
        return ( 
            <div>
                <Login sessionToken={this.props.sessionToken} setSessionToken={this.props.setSessionToken}/>
                <Signup sessionToken={this.props.sessionToken} setSessionToken={this.state.setSessionToken}/>
            </div>
         );
    }
}

export default LoginSignup;