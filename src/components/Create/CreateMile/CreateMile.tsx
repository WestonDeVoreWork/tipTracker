import React from "react";
import { APIURL, Endpoints } from "../../endpoints";

import "./createMile.css"

interface CreateMileProps {
    sessionToken: string
}
 
interface CreateMileState {
    StartingMileage: number,
    EndingMileage: number,
    MilesDriven: number,
    CostOfGas: number,
    GallonsOfGasUsed: number,
    date: string,

    response: string
}

 
class CreateMile extends React.Component<CreateMileProps, CreateMileState> {
    constructor(props: CreateMileProps) {
        super(props);
        this.state = { 
            StartingMileage: 0,
            EndingMileage: 0,
            MilesDriven: 0,
            CostOfGas: 0,
            GallonsOfGasUsed: 0,
            date: "",

            response: ""
     };
    }


    handleSubmit = (event:any) => {
        event.preventDefault();
        console.log(APIURL + Endpoints.mile.create);
        console.log(`Session Token: ${this.props.sessionToken}`)
        let reqObj = {
            StartingMileage: this.state.StartingMileage,
            EndingMileage: this.state.EndingMileage,
            MilesDriven: this.state.MilesDriven,
            CostOfGas: this.state.CostOfGas,
            GallonsOfGasUsed: this.state.GallonsOfGasUsed,
            date: this.state.date
        }

        console.log(reqObj)
        fetch(APIURL + Endpoints.mile.create, {
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
            this.setState({ response: `Mileage ${data.message}` })
        })
        .catch((err) => console.log(err))
    }

    render() { 
        return ( 
            <div className="createMileMainDiv">

                <div className="createMileTitleDiv">
                    <p className="createMileTitle">CREATE MILEAGE LOG</p>
                </div>

                <div className="createMileFormDiv">
                    <form onSubmit={this.handleSubmit}>
                        <fieldset>

                            <br/>

                            <div>
                                <label className="createMileFormLabel">Starting Mileage:</label>
                            </div>
                            
                            <input id="StartingMileage"
                            className="createMileInput" 
                            name="StartingMileage" 
                            placeholder="Ex: 57200"
                            type="text"
                            value={this.state.StartingMileage} 
                            onChange={ (e) => this.setState({
                                StartingMileage: parseInt(e.target.value)
                            })} /* onInput={this.updateMilesDriven} */ />

                            <div>
                                <label className="createMileFormLabel">Ending Mileage:</label>
                            </div>

                            <input id="EndingMileage"
                            className="createMileInput" 
                            name="EndingMileage" 
                            placeholder="Ex: 57218"
                            type="text"
                            value={this.state.EndingMileage} 
                            onChange={(e) => this.setState({
                                EndingMileage: parseInt(e.target.value)
                            })} /* onInput={this.updateMilesDriven} */ />

                            <div>
                                <label className="createMileFormLabel">Miles Driven:</label>
                                {/* <h3>{this.state.MilesDriven}</h3> */}
                            </div>

                            <input id="MilesDriven"
                            className="createMileInput" 
                            name="MilesDriven" 
                            placeholder="Ex: 11:45"
                            type="text"
                            value={this.state.MilesDriven} 
                            onChange={(e) => this.setState({
                                MilesDriven: parseInt(e.target.value)
                            })} />

                            <div>
                                <label className="createMileFormLabel">Gallons of Gas Used:</label>
                                {/* <h3>{this.state.MilesDriven}</h3> */}
                            </div>

                            <input id="GallonsOfGasUsed"
                            className="createMileInput" 
                            name="GallonsOfGasUsed" 
                            placeholder="Ex: 11:45"
                            type="text"
                            value={this.state.GallonsOfGasUsed} 
                            onChange={(e) => this.setState({
                                GallonsOfGasUsed: parseInt(e.target.value)
                            })} />

                            <div>
                                <label className="createMileFormLabel">Date (YYYY-MM-DD):</label>
                            </div>

                            <input id="date"
                            className="createMileInput" 
                            name="date" 
                            placeholder="Ex: 2022-02-01"
                            type="text"
                            value={this.state.date} 
                            onChange={(e) => this.setState({
                                date: e.target.value
                            })} />

                        </fieldset>
                        
                            <button type="submit" id="submit">SUBMIT</button>
                    <br />
                    </form>
                </div>

                <p className="responsePara">{this.state.response}</p>

            </div>
         
         );
    }
}
 
export default CreateMile;