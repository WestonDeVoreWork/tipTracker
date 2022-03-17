import { Component, useState } from 'react';

import { APIURL, Endpoints } from '../endpoints';

import "./loginSignup.css"

interface LoginProps {
    sessionToken: string,
    setSessionToken: any
}

// future stretch goal: showPass toggle button

interface LoginState {
    username: string,
    password: string,
    showPassword: boolean,

    // sessionToken: string,
    // setSessionToken: any
}

class Login extends Component <LoginProps , LoginState> {
    
    constructor(props:any) {
        super(props)
        
        // let showPassword: boolean

        this.state = {
            username: "",
            password: "",
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
    
    showPass() {
        if (this.state.showPassword == true) {
            this.setState({showPassword: false})
        } else {
            this.setState({showPassword: true})
        }
    }

    handleSubmit = (event:any) => {
        event.preventDefault();
        console.log(APIURL+Endpoints.user.login);
        let reqObj = {
            username: this.state.username,
            password: this.state.password
        }

        fetch(APIURL + Endpoints.user.login, {
            method: "POST",
            body: JSON.stringify(reqObj),
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        }) .then (res => res.json())
        // .then((data) => console.log(data.sessionToken))
        .then((data) => this.props.setSessionToken(
            data.sessionToken))
        .catch((err) => console.log(err))
    }

    render ( ) {
        return (
            
            <div>
            <h1 className='LoginSignupTitle'>Login Here!</h1>
            
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

                <button className='loginSignupButton' type="submit" id="submit">Login!</button>
            </form>

            <br />

        </div>

        )
    } 
}

export default Login;