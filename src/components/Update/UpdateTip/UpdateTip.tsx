import React from "react";
import { APIURL, Endpoints } from "../../endpoints";

import "../UpdateMile/updateMile.css"

interface UpdateTipProps {
    sessionToken: string
}
 
interface UpdateTipState {
    TotalIncomeFromTips: string,
    NumberOfDeliveries: string,
    StartingTime: string,
    EndingTime: string,
    TotalTimeDelivering: string,
    date: string,
    tipId: string,

    response: string
}

 
class UpdateTip extends React.Component< UpdateTipProps, UpdateTipState> {
    constructor(props: UpdateTipProps) {
        super(props);
        this.state = { 
            TotalIncomeFromTips: "",
            NumberOfDeliveries: "",
            StartingTime: "",
            EndingTime: "",
            TotalTimeDelivering: "",
            date: "",
            tipId: "",

            response: ""
     };
    }


    handleSubmit = (event:any) => {
        event.preventDefault();
        console.log(APIURL + Endpoints.tips.update);
        let reqObj = {
            TotalIncomeFromTips: this.state.TotalIncomeFromTips,
            NumberOfDeliveries: this.state.NumberOfDeliveries,
            StartingTime: this.state.StartingTime,
            EndingTime: this.state.EndingTime,
            TotalTimeDelivering: this.state.TotalTimeDelivering,
            date: this.state.date
        }

        console.log(reqObj)
        fetch(APIURL + Endpoints.tips.update + this.state.tipId, {
            method: "POST",
            body: JSON.stringify(reqObj),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.props.sessionToken}`
            })
        }) .then (res => res.json())
        .then((data) => {
            console.log(data);
            this.setState({ response: `${data.message}` })
        })
        .catch((err) => console.log(err))
    }

    render() { 
        return ( 
            <div className="updateMainDiv">

                <div className="updateTitleDiv">
                    <p className="updateParaTitle">UPDATE TIP LOG</p>
                </div>

                <div className="updateFormDiv">
                    <form onSubmit={this.handleSubmit}>

                        <fieldset>
                            
                            <br />
                            <div>
                                <label className="updateFormLabel">Income From Tips:</label>
                            </div>

                            <input id="TotalIncomeFromTips"
                            className="updateInput"
                            name="TotalIncomeFromTips" 
                            placeholder="Ex: 54.35"
                            type="text"
                            value={this.state.TotalIncomeFromTips} 
                            onChange={ (e) => this.setState({
                                TotalIncomeFromTips: e.target.value
                            })} />

                            <div>
                                <label className="updateFormLabel">Number of Runs (Deliveries):</label>
                            </div>

                            <input id="NumberOfDeliveries"
                            className="updateInput"
                            name="NumberOfDeliveries" 
                            placeholder="Ex: 10"
                            type="text"
                            value={this.state.NumberOfDeliveries} 
                            onChange={(e) => this.setState({
                                    NumberOfDeliveries: e.target.value
                            })} />

                            <div>
                                <label className="updateFormLabel">Starting Time:</label>
                            </div>

                            <input id="StartingTime"
                            className="updateInput"
                            name="StartingTime" 
                            placeholder="Ex: 11:45"
                            type="text"
                            value={this.state.StartingTime} 
                            onChange={(e) => this.setState({
                                StartingTime: e.target.value
                            })} />

                            <div>
                                <label className="updateFormLabel">Ending Time:</label>
                            </div>

                            <input id="EndingTime"
                            className="updateInput"
                            name="EndingTime" 
                            placeholder="Ex: 15:45"
                            type="text"
                            value={this.state.EndingTime} 
                            onChange={(e) => this.setState({
                                EndingTime: e.target.value
                            })} />

                            <div>
                                <label className="updateFormLabel">TotalTimeDelivering:</label>
                            </div>

                            <input id="TotalTimeDelivering"
                            className="updateInput"
                            name="TotalTimeDelivering" 
                            placeholder="Ex: 4.5 Hours"
                            type="text"
                            value={this.state.TotalTimeDelivering} 
                            onChange={(e) => this.setState({
                                TotalTimeDelivering: e.target.value
                            })} />

                            <div>
                                <label className="updateFormLabel">date (YYYYMMDD):</label>
                            </div>

                            <input id="date"
                            className="updateInput"
                            name="date" 
                            placeholder="Ex: 20220201"
                            type="text"
                            value={this.state.date} 
                            onChange={(e) => this.setState({
                                date: e.target.value
                            })} />
                            
                            <div>
                                <label className="updateFormLabel">ID of Update Log:</label>
                            </div>

                            <input id="logID"
                            className="updateInput"
                            name="logID" 
                            placeholder="Ex: 1"
                            type="text"
                            value={this.state.tipId} 
                            onChange={(e) => this.setState({
                                tipId: e.target.value
                            })} />

                        </fieldset>
                        
                        <button type="submit" id="submit">SUBMIT</button>
                    </form>
                </div>

            </div>
         
         );
    }
}
 
export default UpdateTip;