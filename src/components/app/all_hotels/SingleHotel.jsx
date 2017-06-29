import React, {Component} from 'react';
import {connect} from 'react-redux';

class SingleHotel extends Component {

    render() {
        const { name, floors_numb, rooms_numb, descr } = this.props.Hotel;

        return (
            <div className="single-hotel-comp">
                <img className="hotel-photo" src="http://www.starwoodhotels.com/pub/media/1703/she1703ex.167698_xx.jpg" alt="hotel photo"/>

                <div className="hotel-info">
                    <div className="name">{name}</div>
                    <div className="rooms-numb"><span className="fa fa-bar-chart"></span>{rooms_numb} rooms</div>
                    <div className="floors-numb"><span className="fa fa-bar-chart"></span>{floors_numb} floors</div>
                    <div className="short-descr">{descr}</div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
}

export default connect(mapStateToProps, null)(SingleHotel);
