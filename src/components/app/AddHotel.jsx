import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hotelRef} from '../../firebase';
import AlertContainer from 'react-alert'

class AddHotel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            floors_numb: '',
            rooms_numb: '',
            descr: '',
        }
    }

    alertOptions = {
        offset: 14,
        position: 'top right',
        theme: 'dark',
        time: 2500,
        transition: 'fade'
    }

    addHotel() {
        const {name, floors_numb, rooms_numb, descr} = this.state;
        let canPush = true;

        if(name == null || name == undefined || !(name.length > 1)){
            console.log("name cant be null");
            canPush = false;
        }
        if(!isNumeric(floors_numb) ){
            console.log("floors number must be the number");
            canPush = false;
        }
        if(!isNumeric(rooms_numb)){
            console.log("rooms number must be the number");
            canPush = false;
        }
        if(descr == null || !(descr.length > 10) || descr == undefined){
            console.log("description must have 10 characters at least");
            canPush = false;
        }

        if(canPush){
            hotelRef.push({name, floors_numb, rooms_numb, descr});
            this.msg.success('Hotel was added to our database');
        }
        else{
            showMessage("eloelo520",'testowa');
            this.msg.error('Somethings wrong please fill inputs again.');
        }

    }

    render() {
        return (

            <div className="add-hotel-comp">
                <div className="header">Add Hotel</div>
                <div className="add-hotel-form-wrapper">
                        <input className="add-hotel-inpt" placeholder="Name"
                               onChange={event => this.setState({name: event.target.value})}/>
                        <input className="add-hotel-inpt" placeholder="Floors number"
                               onChange={event => this.setState({floors_numb: event.target.value})}/>
                        <input className="add-hotel-inpt" placeholder="Rooms number"
                               onChange={event => this.setState({rooms_numb: event.target.value})}/>
                        <textarea className="add-hotel-textarea" placeholder="Hotel description"
                                  onChange={event => this.setState({descr: event.target.value})}></textarea>
                        <button className="add-hotel-btn" onClick={() => this.addHotel()}>ADD HOTEL</button>
                    <div className="testowa">dsa</div>
                </div>

                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />

            </div>
        )
    }
}


function mapStateToProps(state) {
    const {user} = state;
    return {
        user
    }
}

function isNumeric(value) {
    return /^\d+$/.test(value);
}

function showMessage(message, classname){
    console.log(classname);
    console.log(document.getElementsByClassName(classname));
}

export default connect(mapStateToProps, null)(AddHotel);
