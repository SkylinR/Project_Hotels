import {ADD_HOTEL} from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_HOTEL:
            const { hotel } = action;
            return hotel;

        default:
            return state;
    }
}