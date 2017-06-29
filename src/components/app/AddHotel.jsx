import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddHotel extends Component {

    render() {
        return (

            <div  className="add-hotel-comp">
                <div className="header">Add Hotel</div>
                <div className="add-hotel-form-wrapper">
                    <form>
                        <input className="add-hotel-inpt" placeholder="Name" />
                        <input className="add-hotel-inpt" placeholder="Floors number" />
                        <input className="add-hotel-inpt" placeholder="Rooms number" />
                        <textarea className="add-hotel-textarea" placeholder="Hotel description"></textarea>
                        <button className="add-hotel-btn">ADD HOTEL</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddHotel;
