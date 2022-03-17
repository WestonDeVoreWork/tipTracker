import React from "react";
import Login from "./Login";
import Signup from "./Signup";

interface LoginSignupProps {
    sessionToken: string,
    setSessionToken: any,
}
 
interface LoginSignupState {
    response: string
}

class LoginSignup extends React.Component<LoginSignupProps, LoginSignupState> {
    constructor(props: LoginSignupProps) {
        super(props);
        this.state = { response: "" };
    }

    setResponse = (response: string) => {
        this.setState({
            response: response
        })
    }

    render() { 
        return ( 
            <div>
                {/* { isLoginVisible ?   */}
                <Login sessionToken={this.props.sessionToken} setSessionToken={this.props.setSessionToken} setResponse={this.setResponse}/>
                <Signup sessionToken={this.props.sessionToken} setSessionToken={this.props.setSessionToken} setResponse={this.setResponse}/>
                <p className="responseParaSmall">{this.state.response}</p>
                {/* } */}
            </div>
         );
    }
}

export default LoginSignup;