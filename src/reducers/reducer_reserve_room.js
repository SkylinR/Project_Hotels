import {RESERVE_ROOM} from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case RESERVE_ROOM:
            const { reserve_room } = action;
            return reserve_room;

        default:
            return state;
    }
}