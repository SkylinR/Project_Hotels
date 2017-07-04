import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hotelRef} from '../../firebase';
import { setHotels } from '../../actions';

import SingleHotel from './all_hotels/SingleHotel';

class AllHotels extends Component {

    componentDidMount() {
        hotelRef.on('value', snap => {
            let Hotels = [];

            snap.forEach(Hotel => {
                const {name, floors_numb, rooms_numb, descr} = Hotel.val();
                Hotels.push({name, floors_numb, rooms_numb, descr})
            })

            this.props.setHotels(Hotels);
        })
    }

    render() {

        return (
            <div className="all-hotels-comp">

                <div className="header">All Hotels</div>

                <div className="hotels-list">

                    {
                        this.props.Hotels.map((Hotel, index) => {
                            return (
                                <SingleHotel key={index} Hotel={Hotel}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { Hotels } = state;
    return {
        Hotels
    }
}

export default connect(mapStateToProps, { setHotels })(AllHotels);