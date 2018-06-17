import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {hotelRef} from '../../firebase';
import AlertContainer from 'react-alert'

class AddHotel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'name': '',
            'floors_numb': '',
            'rooms_numb': '',
            'descr': '',
            'infos': {
                'wrongName': {
                    'text': ''
                },
                'wrongFloors': {
                    'text': ''
                },
                'wrongRooms': {
                    'text': ''
                },
                'wrongDescr': {
                    'text': ''
                },
            }

        }
    }

    alertOptions = {
        offset: 14,
        position: 'top right',
        theme: 'dark',
        time: 2500,
        transition: 'fade'
    }

    addHotel = (e) => {
        console.log(ReactDOM.findDOMNode(this.refs.addHotelField));

        const {name, floors_numb, rooms_numb, descr} = this.state;
        let {wrongNameText, wrongFloorsText, wrongRoomsText, wrongDescrText} = this.state.infos;
        let canPush = true;

        if (name === null || name === undefined || !(name.length > 1)) {
            canPush = false;
            wrongNameText = 'Fill correctly the hotel name';
        }
        else{
            wrongNameText = '';
        }

        if (!isNumeric(floors_numb)) {
            canPush = false;
            wrongFloorsText = 'Fill correctly floors number';
        }
        else{
            wrongFloorsText = '';
        }

        if (!isNumeric(rooms_numb)) {
            canPush = false;
            wrongRoomsText = 'Fill correctly rooms number';
        }
        else{
            wrongRoomsText = '';
        }

        if (descr === null || !(descr.length > 10) || descr === undefined) {
            canPush = false;
            wrongDescrText = 'Description must have 10 or more characters';
        }
        else{
            wrongDescrText = ''
        }

        if (canPush) {
            // TODO UNCOMMENT
            // hotelRef.push({name, floors_numb, rooms_numb, descr});
            this.setState({infos: {
                wrongName: { text: ''},
                wrongFloors: { text: ''},
                wrongRooms: { text: ''},
                wrongDescr: { text: ''}
            }});
            this.msg.success('Hotel was added to our database');
        }
        else {
            this.setState({infos: {
                wrongName: { text: wrongNameText},
                wrongFloors: { text: wrongFloorsText},
                wrongRooms: { text: wrongRoomsText},
                wrongDescr: { text: wrongDescrText}
            }});

            this.msg.error('Somethings wrong please fill inputs again.');
        }

    }

    render() {
        return (

            <div className="add-hotel-comp">
                <div className="header">Add Hotel</div>
                <div className="add-hotel-form-wrapper">
                    <input className="add-hotel-inpt" ref="addHotelField" placeholder="Name"
                           onChange={event => this.setState({name: event.target.value})}/>
                    <div className="wrong-type-inpt">{this.state.infos.wrongName.text}</div>

                    <input className="add-hotel-inpt" ref="addHotelField" placeholder="Floors number"
                           onChange={event => this.setState({floors_numb: event.target.value})}/>
                    <div className="wrong-type-inpt">{this.state.infos.wrongFloors.text}</div>

                    <input className="add-hotel-inpt" ref="addHotelField" placeholder="Rooms number"
                           onChange={event => this.setState({rooms_numb: event.target.value})}/>
                    <div className="wrong-type-inpt">{this.state.infos.wrongRooms.text}</div>

                    <textarea className="add-hotel-textarea" ref="addHotelField" placeholder="Hotel description"
                              onChange={event => this.setState({descr: event.target.value})}></textarea>
                    <div className="wrong-type-inpt">{this.state.infos.wrongDescr.text}</div>

                    <button className="add-hotel-btn" onClick={() => this.addHotel()}>ADD HOTEL</button>
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

export default connect(mapStateToProps, null)(AddHotel);
