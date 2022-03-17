import { constants } from 'buffer';
import { Component, useState } from 'react';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'

import "./loginSignup.css"

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    FormText
} from "reactstrap";
import { AmdDependency, isPropertySignature } from 'typescript';
import { runInThisContext } from 'vm';

import { APIURL, Endpoints } from '../endpoints';

interface SignupProps {
    sessionToken: string,
    setSessionToken: any

    setResponse: any
}

interface SignupState {
    username: string,
    password: string,
    FirstName: string,
    Occupation: string,
    isAdmin: boolean,
    showPassword: boolean,

    // sessionToken: string,
    // setSessionToken: any
}

// interface SignupProps {
    
// }

// class Signup2 extends Component <{props type definition} , {state type definition}> {
class Signup extends Component <SignupProps , SignupState> {
    
    constructor(props:any) {
        super(props)
        
        // let showPassword: boolean

        this.state = {
            username: "",
            password: "",
            FirstName: "",
            Occupation: "",
            isAdmin: false,
            showPassword: false,

            // sessionToken: "", 
            // setSessionToken: ""
        };
    }

    setUsername(username:string) {
        this.setState({
            username: username,
        })
    }

    setPassword(password:string) {
        this.setState({
            password: password
        })
    }

    setFirstName(firstName: string) {
        this.setState({
            FirstName: firstName
        })
    }
    
    setOccupation(firstName: string) {
        this.setState({
            FirstName: firstName
        })
    }

    setIsAdmin(isAdmin: boolean) {
        this.setState({
            isAdmin: isAdmin
        })
    }
    
    setShowPassword (showPassword: boolean) {
        this.setState({
            showPassword: showPassword
        })
    }


    handleChange ( event:React.ChangeEvent<HTMLInputElement>
        ) {
        this.setState({
            ...this.state, // ...this.state, says "Ignore all other states"
            [ event.target.name ] : event.target.value
        })
    }


    // showPassword = false
    
    showPass() {
        if (this.state.showPassword == true) {
            this.setState({showPassword: false})
        } else {
            this.setState({showPassword: true})
        }
    }

    handleSubmit = (event:any) => {
        event.preventDefault();
        console.log(APIURL+Endpoints.user.register);
        let reqObj = {
            username: this.state.username,
            password: this.state.password,
            FirstName: this.state.FirstName,
            Occupation: this.state.Occupation,
            isAdmin: this.state.isAdmin
        }
        fetch(APIURL + Endpoints.user.register, {
            method: "POST",
            body: JSON.stringify(reqObj),
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        }) .then (res => res.json())
        .then((data) => {
            this.props.setSessionToken(
                data.sessionToken);
                this.props.setResponse(data.message)
            })
        // .then((data) => this.props.setSessionToken(data.sessionToken))
        .catch((err) => console.log(err))
    }

    render ( ) {
        return (
            
            <div>
            <h1 className='LoginSignupTitle'>Register An Account Here!</h1>
            
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <div>
                        <label className='FormLabel'>Username:</label>
                    </div>

                    <input id="username" className='loginSignupInput' name="username" placeholder='User123' type="text" value={this.state.username} onChange={ (e) => this.setState({
                        username: e.target.value
                    }) }/>
                </fieldset>

                <fieldset>
                    <div>
                        <label className='FormLabel'>Password:</label>
                    </div>

                    <input 
                        id="password"
                        className='loginSignupInput' 
                        name="password" 
                        placeholder='MyPassword123!$' 
                        type="text" value={this.state.password} 
                        onChange={ (e) => this.setState({
                            password: e.target.value
                        }) }/>
                </fieldset>

                <fieldset>
                    <div>
                        <label className='FormLabel'>First Name:</label>
                    </div>

                    <input 
                        id="FirstName"
                        className='loginSignupInput' 
                        name="FirstName" 
                        placeholder='Jameson' 
                        type="text" value={this.state.FirstName} 
                        onChange={(e) => this.setState({
                            FirstName: e.target.value
                            })}/>
                </fieldset>

                <fieldset>
                    <div>
                        <label className='FormLabel'>Occupation:</label>
                    </div>

                    <input 
                        id="Occupation"
                        className='loginSignupInput' 
                        name="Occupation" 
                        placeholder='Doordash, SkipTheDishes, etc.' 
                        type="text" value={this.state.Occupation} 
                        onChange={(e) => this.setState({
                            Occupation: e.target.value
                        })}/>
                </fieldset>

                {/* <button type="button" onChange={this.showPass} /> */}

                <button className='loginSignupButton' type="submit" id="submit">Signup!</button>
            </form>
            
            <br />

        </div>

        )
    } 
}
            
// const Signup2 = () => {

//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [firstName, setFirstName] = useState("");
//     const [occupation, setOccupation] = useState("");
//     const [isAdmin, setIsAdmin] = useState("");
    
//     function handleSubmit(event:any) {
//         event.preventDefault()
//         console.log(APIURL+Endpoints.user.login)
//         const reqObj = {
//             username: username,
//             password: password,
//             FirstName: firstName,
//             Occupation: occupation,
//             isAdmin: isAdmin
//             }
        
//         fetch(APIURL + Endpoints.user.register, {
//             method: "POST",
//             body: JSON.stringify(reqObj),
//             headers: new Headers ({
//                 "Content-Type":"application/json"
//             })
//         }) .then(res => res.json())
//         .then((data)=> console.log(data))
//         .catch((err) => console.error(err))
//     }

//     return(
//         <div>
//             <h1>Signup</h1>
            
//             <form>
//                 <fieldset>
//                     <label>Username</label>

//                     <input id="username" name="username" placeholder='User123ABC' type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
//                 </fieldset>

//                 <fieldset>
//                     <label>Password</label>

//                     <input 
//                         id="password" 
//                         name="password" 
//                         placeholder='MyPassword123!$' 
//                         type="text" value={password} 
//                         onChange={(e) => setPassword(e.target.value)}/>
//                 </fieldset>

//                 <fieldset>
//                     <label>First Name</label>

//                     <input 
//                         id="firstName" 
//                         name="firstName" 
//                         placeholder='Jameson' 
//                         type="text" value={firstName} 
//                         onChange={(e) => setFirstName(e.target.value)}/>
//                 </fieldset>

//                 <fieldset>
//                     <label>Occupation</label>

//                     <input 
//                         id="occupation" 
//                         name="occupation" 
//                         placeholder='Doordash, SkipTheDishes, etc.' 
//                         type="text" value={occupation} 
//                         onChange={(e) => setOccupation(e.target.value)}/>
//                 </fieldset>

//                 {/* TEMPORARY */}

//                 <fieldset>
//                     <label>REMOVE LATER: Admin Perms</label>

//                     <input id="isAdmin" name="isAdmin" type="checkbox" value="isAdmin" />

//                 </fieldset>
//                 <button />
//             </form>
            
//         </div>
//     )
// }

export default Signup;