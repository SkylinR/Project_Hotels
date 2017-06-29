import {SET_HOTELS} from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case SET_HOTELS:
            const { Hotels } = action;
            return Hotels;

        default:
            return state;
    }
}