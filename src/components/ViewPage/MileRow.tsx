import { Component } from 'react';

interface MileRowProps {
    mile:any
}

interface MileRowState {

}

class MileRow extends Component < MileRowProps, MileRowState > {

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">Id:</th>
                            <th scope="col">Cost Of Gas:</th>
                            <th scope="col">Starting Mileage:</th>
                            <th scope="col">Ending Mileage:</th>
                            <th scope="col">Miles Driven:</th>
                            <th scope="col">Gallons Of Gas Used:</th>
                            <th scope="col">Date:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{this.props.mile.id}</th>
                            <td>{this.props.mile.CostOfGas}</td>
                            <td>{this.props.mile.StartingMileage}</td>
                            <td>{this.props.mile.EndingMileage}</td>
                            <td>{this.props.mile.MilesDriven}</td>
                            <td>{this.props.mile.GallonsOfGasUsed}</td>
                            <td>{this.props.mile.date}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MileRow;

// const MileRow2 = (props) => {
//     return ( 
//         <tr>
//             <td>{props.carss.price}</td>
//             <td>{props.carss.condition}</td>
//             <td>{props.carss.transmissionType}</td>
//             <td>{props.carss.color}</td>
//             <td>{props.carss.type}</td>
//             <td>{props.carss.numberOfDoors}</td>
//             <td>{props.carss.miles}</td>
//             <td>{props.carss.vehicleLocation}</td>
//         </tr>
//      );
// }
 
// export default MileRow2;