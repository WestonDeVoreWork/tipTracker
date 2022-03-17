import { Component, useState } from 'react';

interface TipsRowProps {
    tips:any
}

interface TipsRowState {

}

class TipsRow extends Component < TipsRowProps, TipsRowState > {

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">Id:</th>
                            <th scope="col">Starting Time:</th>
                            <th scope="col">Ending Time:</th>
                            <th scope="col">Income Per Hour:</th>
                            <th scope="col">Number of Deliveries:</th>
                            <th scope="col">Number of Tips Received:</th>
                            <th scope="col">Total Income From Tips:</th>
                            <th scope="col">Total Time Delivering:</th>
                            <th scope="col">Date:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{this.props.tips.id}</th>
                            <td>{this.props.tips.StartingTime}</td>
                            <td>{this.props.tips.EndingTime}</td>
                            <td>{this.props.tips.IncomePerHour}</td>
                            <td>{this.props.tips.NumberOfDeliveries}</td>
                            <td>{this.props.tips.NumberOfTipsReceived}</td>
                            <td>{this.props.tips.TotalIncomeFromTips}</td>
                            <td>{this.props.tips.TotalTimeDelivering}</td>
                            <td>{this.props.tips.date}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TipsRow;