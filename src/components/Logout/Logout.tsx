import React from "react";
import Signout from "../LoginSignup/Signout";

interface LogoutProps {
    clearLocalStorage: any
}
 
interface LogoutState {
    display: string
}
 
class Logout extends React.Component<LogoutProps, LogoutState> {
    constructor(props: LogoutProps) {
        super(props);
        this.state = { display: "" };
    }
    render() { 
        return ( 
            <div>
                <button onClick={this.props.clearLocalStorage}>SIGNOUT</button>
            </div>
         );
    }
}
 
export default Logout;

// const Logout = () => {
    
//     Signout = () => {

//     }

//     return(
//         <div>
//             <button>SIGNOUT</button>
//         </div>
//     )
// }

// export default Logout;