import { Component, useState } from 'react';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'

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

interface ViewPageProps {
    // sessionToken: string,
    // setSessionToken: any
}

interface ViewPageState {
    username: string,
    password: string,
    FirstName: string,
    Occupation: string,
    isAdmin: boolean,
    showPassword: boolean,

    sessionToken: string,
    setSessionToken: any
}

// interface SignupProps {
    
// }

// class Signup2 extends Component <{props type definition} , {state type definition}> {
class ViewPage extends Component <ViewPageProps , ViewPageState> {
    
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

            sessionToken: "", 
            setSessionToken: ""
        };
    }

    handleSubmit (event:any) {
        event.preventDefault();

        fetch(APIURL + Endpoints.user.register, {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        }) .then (res => res.json())
        .then((data) => console.log(data.sessionToken))
        // .then((data) => this.props.setSessionToken(data.sessionToken))
        .catch((err) => console.log(err))
    }

    render ( ) {
        return (
            <div>
                <h1>ViewPage</h1>
            </div>

        )
    } 
}

export default ViewPage;