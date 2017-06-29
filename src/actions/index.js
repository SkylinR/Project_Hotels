// import {SIGNED_IN } from '../constants';
// import {SET_GOALS} from '../constants';
// import {SET_COMPLETED} from '../constants';
import {SIGNED_IN,ADD_HOTEL, RESERVE_ROOM, SET_HOTELS} from '../constants';

export function logUser(email) {
    const action = {
        type: SIGNED_IN,
        email
    }
    return action;
}

export function addHotel(hotel) {
    const action = {
        type: ADD_HOTEL,
        hotel
    }
    return action;
}

export function reserveRoom(reserve_room) {
    const action = {
        type: RESERVE_ROOM,
        reserve_room
    }
    return action;
}

export function setHotels(Hotels) {
    const action = {
        type: SET_HOTELS,
        Hotels
    }
    return action;
}