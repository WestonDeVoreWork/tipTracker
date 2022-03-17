import { Component, useState } from 'react';

import "./viewPage.css"

import { APIURL, Endpoints } from '../endpoints';
import MileRow from './MileRow';
import TipsRow from './TipsRow';

interface ViewPageProps {
    sessionToken: string,
}

interface ViewPageState {
    deleteTip: string
    deleteMile: string

    myTipLogs: any,
    myMileLogs: any
}

class ViewPage extends Component <ViewPageProps , ViewPageState> {
    
    constructor(props:any) {
        super(props)

        this.state = {
            deleteTip: "",
            deleteMile: "",

            myTipLogs: [],
            myMileLogs: []
        };
    }

    handleSubmit = (event:any) => {
        event.preventDefault();

        fetch(APIURL + Endpoints.mile.getAll, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.sessionToken}`
            })
        }) .then (res => res.json())
        .then((data) => 
        this.setState({
            myMileLogs: data.mileage
        }))
        // console.log(data.mileage[0]))
        // .then((data) => this.props.setSessionToken(data.sessionToken))
        .catch((err) => console.log(err))

        fetch(APIURL + Endpoints.tips.getAll, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.sessionToken}`
            })
        }) .then (res => res.json())
        .then((data) =>
            this.setState({
            myTipLogs: data.allTips
        }))
        // console.log(data.allTips[0]) )
        // .then((data) => this.props.setSessionToken(data.sessionToken))
        .catch((err) => console.log(err))
    }

    handleDeleteTips = (event: any) => {
        event.preventDefault();

        fetch(APIURL + Endpoints.tips.delete + this.state.deleteTip, {
            method: "DELETE",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.sessionToken}`
            })
        }) .then (res => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }

    handleDeleteMile = (event: any) => {
        event.preventDefault();

        fetch(APIURL + Endpoints.mile.delete + this.state.deleteMile, {
            method: "DELETE",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.sessionToken}`
            })
        }) .then (res => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }


    
    render ( ) {

        return (
            <div className='viewPageMainDiv'>
                
                {/* {this.state.myMileLogs}
                {this.state.myTipLogs} */}
                
                <div className='logViewBackground'>
                    <div className='logMainDiv'>
                        <div className='mileLogs'>
                            <div className='logView'>
                                <h2 className='updateFormLabel'>Mile Logs</h2>
                                {this.state.myMileLogs.map((mileLog:any) => ( <MileRow mile={mileLog} /> ))}
                            </div>
                        </div>

                        <div className='tipLogs'>
                            <div className='logView'>
                                <h2 className='updateFormLabel'>Tip Logs</h2>
                                {this.state.myTipLogs.map((tipLog:any) => ( <TipsRow tips={tipLog} /> ))}
                            </div>
                
                <button onClick={this.handleSubmit}>Display Logs</button>
                        </div>
                    </div>
                </div>


                <div className='deleteForms'>
                    <form onSubmit={this.handleDeleteTips}>
                        <fieldset>

                            <div>
                                <label>Delete Tip Log (enter ID):</label>
                            </div>

                            <input id="DeleteTip"
                            name="DeleteTip" 
                            placeholder="Ex: 1"
                            type="text"
                            value={this.state.deleteTip} 
                            onChange={ (e) => this.setState({
                                deleteTip: e.target.value
                            })} />
                        </fieldset>
                        <button type='submit'>Delete Log</button>
                    </form>
                            
                            <br />
                            
                    <form onSubmit={this.handleDeleteMile}>
                        <fieldset>

                            <div>
                                <label>Delete Mile Log (enter ID):</label>
                            </div>
                            
                            <input id="DeleteMile"
                            name="DeleteMile" 
                            placeholder="Ex: 0"
                            type="text"
                            value={this.state.deleteMile} 
                            onChange={ (e) => this.setState({
                                deleteMile: e.target.value
                            })} />
                        </fieldset>
                        <button type='submit'>Delete Log</button>
                    </form>
                    
                </div>
                
            </div>                
        )
    } 
}

export default ViewPage;