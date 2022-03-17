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
    myMileLogs: any,

    response: string,
    mileResponse: string,

    displayLogsButtonName: string,

    tableLabel1: string,
    tableLabel2: string
}

class ViewPage extends Component <ViewPageProps , ViewPageState> {
    
    constructor(props:any) {
        super(props)

        this.state = {
            deleteTip: "",
            deleteMile: "",

            myTipLogs: [],
            myMileLogs: [],

            response: "",
            mileResponse: "",

            displayLogsButtonName: "Display Logs",

            tableLabel1: "Press the Button",
            tableLabel2: "⬇️⬇️"
        };
    }

    handleSubmit = (event:any) => {
        event.preventDefault();

        console.log(APIURL + Endpoints.mile.getAll)
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

        console.log(APIURL + Endpoints.tips.getAll)
        fetch(APIURL + Endpoints.tips.getAll, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.sessionToken}`
            })
        }) .then (res => res.json())
        .then((data) => {
            this.setState({
            myTipLogs: data.allTips
        });
        this.setState({
            tableLabel1: "Mile Logs"
        });
        this.setState({
            tableLabel2: "Tip Logs"
        });
        this.setState({
            displayLogsButtonName: "Refresh Logs"
        })
    })

        
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
        .then((data) => {
            console.log(data);
            this.setState({ response: `${data.message}` });

            this.setState({ deleteTip: "" });
        })
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
        .then((data) => {
            console.log(data);
            this.setState({ mileResponse: `${data.message}` });
            
            this.setState({ deleteMile: "" });
        })
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
                                <h2 className='viewPageFormLabel'>{this.state.tableLabel1}</h2>
                                {this.state.myMileLogs.map((mileLog:any) => ( <MileRow mile={mileLog} /> ))}
                            </div>
                        </div>

                        <div className='tipLogs'>
                            <div className='logView'>
                                <h2 className='viewPageFormLabel'>{this.state.tableLabel2}</h2>
                                {this.state.myTipLogs.map((tipLog:any) => ( <TipsRow tips={tipLog} /> ))}
                            </div>
                        </div>
                    <button onClick={this.handleSubmit}>{this.state.displayLogsButtonName}</button>
                    </div>
                </div>


                <div className='deleteForms'>
                     
                    <form onSubmit={this.handleDeleteMile}>
                        <fieldset>

                            <div>
                                <label className='deleteFormLabel'>Delete Mile Log (enter ID):</label>
                            </div>
                            
                            <input id="DeleteMile"
                            className='viewPageInput'
                            name="DeleteMile" 
                            placeholder="Ex: 0"
                            type="text"
                            value={this.state.deleteMile} 
                            onChange={ (e) => this.setState({
                                deleteMile: e.target.value
                            })} />
                        </fieldset>
                        <button type='submit'>Delete Log</button>
                        <p className='responseParaSmall'>{this.state.mileResponse}</p>
                    </form>

                    <br />

                    <form onSubmit={this.handleDeleteTips}>
                        <fieldset>

                            <div>
                            <label className='deleteFormLabel'>Delete Tip Log (enter ID):</label>
                            </div>

                            <input id="DeleteTip"
                            className='viewPageInput'
                            name="DeleteTip" 
                            placeholder="Ex: 1"
                            type="text"
                            value={this.state.deleteTip} 
                            onChange={ (e) => this.setState({
                                deleteTip: e.target.value
                            })} />
                        </fieldset>
                        <button type='submit'>Delete Log</button>
                        <p className='responseParaSmall'>{this.state.response}</p>
                    </form>

                </div>
                
            </div>                
        )
    } 
}

export default ViewPage;