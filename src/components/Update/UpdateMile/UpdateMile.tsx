import React from "react";
import { APIURL, Endpoints } from "../../endpoints";

import "./updateMile.css"

interface UpdateMileProps {
    sessionToken: string
}
 
interface UpdateMileState {
    StartingMileage: number,
    EndingMileage: number,
    MilesDriven: number,
    CostOfGas: number,
    GallonsOfGasUsed: number,
    date: string,

    response: string,
    mileId: string
}

 
class UpdateMile extends React.Component< UpdateMileProps, UpdateMileState> {
    constructor(props: UpdateMileProps) {
        super(props);
        this.state = { 
            StartingMileage: 0,
            EndingMileage: 0,
            MilesDriven: 0,
            CostOfGas: 0,
            GallonsOfGasUsed: 0,
            date: "",
            
            response: "",
            mileId: ""
     };
    }


    handleSubmit = (event:any) => {
        event.preventDefault();
        console.log(APIURL + Endpoints.tips.update);
        let reqObj = {
            StartingMileage: this.state.StartingMileage,
            EndingMileage: this.state.EndingMileage,
            MilesDriven: this.state.MilesDriven,
            CostOfGas: this.state.CostOfGas,
            GallonsOfGasUsed: this.state.GallonsOfGasUsed,
            date: this.state.date
        }

        console.log(reqObj)
        fetch(APIURL + Endpoints.mile.update + this.state.mileId, {
            method: "PUT",
            body: JSON.stringify(reqObj),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.props.sessionToken}`
            })
        }) .then (res => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    }

    render() { 
        return ( 
            <div className="updateMainDiv">

                    <div className="updateTitleDiv">
                        <p className="updateParaTitle">UPDATE MILE LOG</p>
                    </div>

                <div className="updateFormDiv">
                    <form onSubmit={this.handleSubmit}>
                        <fieldset>

                            <br />
                            <div>
                                <label className="updateFormLabel">Starting Mileage:</label>
                            </div>
                            
                            <input id="StartingMileage"
                            className="updateInput"
                            name="StartingMileage" 
                            placeholder="Ex: 57200"
                            type="text"
                            value={this.state.StartingMileage} 
                            onChange={ (e) => this.setState({
                                StartingMileage: parseInt(e.target.value)
                            })} />

                            <div>
                                <label className="updateFormLabel">Ending Mileage:</label>
                            </div>

                            <input id="EndingMileage"
                            className="updateInput"
                            name="EndingMileage" 
                            placeholder="Ex: 57218"
                            type="text"
                            value={this.state.EndingMileage} 
                            onChange={(e) => this.setState({
                                EndingMileage: parseInt(e.target.value)
                            })} />

                            <div>
                                <label className="updateFormLabel">Miles Driven:</label>
                            </div>

                            <input id="MilesDriven"
                            className="updateInput"
                            name="MilesDriven" 
                            placeholder="Ex: 11:45"
                            type="text"
                            value={this.state.MilesDriven} 
                            onChange={(e) => this.setState({
                                MilesDriven: parseInt(e.target.value)
                            })} />

                            <div>
                                <label className="updateFormLabel">date (YYYY-MM-DD):</label>
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
                            value={this.state.mileId} 
                            onChange={(e) => this.setState({
                                mileId: e.target.value
                            })} />

                        </fieldset>
                        
                        <button type="submit" id="submit">SUBMIT</button>
                    </form>
                </div>

            </div>
         
         );
    }
}
 
export default UpdateMile;