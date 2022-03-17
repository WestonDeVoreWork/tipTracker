import React from "react";
import { APIURL, Endpoints } from "../../endpoints";

import "./createTip.css"

interface CreateTipProps {
    sessionToken: string
}
 
interface CreateTipState {
    TotalIncomeFromTips: string,
    NumberOfTipsReceived: number,
    NumberOfDeliveries: number,
    StartingTime: number,
    EndingTime: number,
    TotalTimeDelivering: string,
    IncomePerHour: number,
    date: string,

    response: string
}

 
class CreateTip extends React.Component<CreateTipProps, CreateTipState> {
    constructor(props: CreateTipProps) {
        super(props);
        this.state = { 
            TotalIncomeFromTips: "",
            NumberOfTipsReceived: 0,
            NumberOfDeliveries: 0,
            StartingTime: 0,
            EndingTime: 0,
            TotalTimeDelivering: "",
            IncomePerHour: 0,
            date: "",

            response: ""
     };
    }


    handleSubmit = (event:any) => {
        event.preventDefault();
        console.log(APIURL + Endpoints.tips.create);
        console.log(this.props.sessionToken)
        let reqObj = {
            TotalIncomeFromTips: this.state.TotalIncomeFromTips,
            NumberOfTipsReceived: this.state.NumberOfTipsReceived,
            NumberOfDeliveries: this.state.NumberOfDeliveries,
            StartingTime: this.state.StartingTime,
            EndingTime: this.state.EndingTime,
            TotalTimeDelivering: this.state.TotalTimeDelivering,
            IncomePerHour: this.state.IncomePerHour,
            date: this.state.date
        }

        console.log(reqObj)
        fetch(APIURL + Endpoints.tips.create, {
            method: "POST",
            body: JSON.stringify(reqObj),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.props.sessionToken}`
            })
        }) .then (res => res.json())
        // .then((data) => console.log(data))
        .then((data) => {
            console.log(data);
            this.setState({ response: `Tip ${data.message}` })
        })
        .catch((err) => console.log(err))
    }

    render() { 
        return ( 
            <div className="createTipMainDiv">

                <div className="createTipTitleDiv">
                    <p className="createTipTitle">CREATE TIP LOG</p>
                </div>

                <div className="createtipFormDiv">
                    <form onSubmit={this.handleSubmit}>
                        <fieldset>
                                
                                <div className="createTipForm">
                                <br />
                                
                                <div>
                                    <label className="createTipFormLabel">Income From Tips:</label>
                                </div>
                                
                                <input id="TotalIncomeFromTips"
                                className="createTipInput" 
                                name="TotalIncomeFromTips" 
                                placeholder="Ex: 54.35"
                                type="text"
                                value={this.state.TotalIncomeFromTips} 
                                onChange={ (e) => this.setState({
                                    TotalIncomeFromTips: e.target.value
                                })} />

                                <div>
                                    <label className="createTipFormLabel">Number of Tips Received:</label>
                                </div>
                                
                                <input id="NumberOfTipsReceived"
                                className="createTipInput" 
                                name="NumberOfTipsReceived" 
                                placeholder="Ex: 7"
                                type="text"
                                value={this.state.NumberOfTipsReceived} 
                                onChange={(e) => this.setState({
                                    NumberOfTipsReceived: parseInt(e.target.value)
                                })} />

                                <div>
                                    <label className="createTipFormLabel">Number of Runs (Deliveries):</label>
                                </div>

                                <input id="NumberOfDeliveries"
                                className="createTipInput" 
                                name="NumberOfDeliveries" 
                                placeholder="Ex: 10"
                                type="text"
                                value={this.state.NumberOfDeliveries} 
                                onChange={(e) => this.setState({
                                        NumberOfDeliveries: parseInt(e.target.value)
                                })} />
                        
                                <div>
                                    <label className="createTipFormLabel">date (YYYYMMDD):</label>
                                </div>
                                
                                <input id="date"
                                name="date" className="createTipInput" 
                                placeholder="Ex: 2022-02-01"
                                type="text"
                                value={this.state.date} 
                                onChange={(e) => this.setState({
                                    date: e.target.value
                                })} />

                                <div>
                                    <label className="createTipFormLabel">Starting Time:</label>
                                </div>
                                
                                <input id="StartingTime"
                                className="createTipInput" 
                                name="StartingTime" 
                                placeholder="Ex: 11:45"
                                type="text"
                                value={this.state.StartingTime} 
                                onChange={(e) => this.setState({
                                    StartingTime: parseInt(e.target.value)
                                })} />
                                
                                <div>
                                    <label className="createTipFormLabel">Ending Time:</label>
                                </div>

                                <input id="EndingTime"
                                className="createTipInput" 
                                name="EndingTime" 
                                placeholder="Ex: 15:45"
                                type="text"
                                value={this.state.EndingTime} 
                                onChange={(e) => this.setState({
                                    EndingTime: parseInt(e.target.value)
                                })} />

                                <div>
                                    <label className="createTipFormLabel">TotalTimeDelivering:</label>
                                </div>
                                
                                <input id="TotalTimeDelivering"
                                className="createTipInput" 
                                name="TotalTimeDelivering" 
                                placeholder="Ex: 4.5 Hours"
                                type="text"
                                value={this.state.TotalTimeDelivering} 
                                onChange={(e) => this.setState({
                                    TotalTimeDelivering: e.target.value
                                })} />
                            </div>

                        </fieldset>
                        
                        <button type="submit" id="submit">SUBMIT</button>
                    </form>
                    <br />
                </div>

                <p className="responsePara">{this.state.response}</p>

            </div>
         
         );
    }
}
 
export default CreateTip;