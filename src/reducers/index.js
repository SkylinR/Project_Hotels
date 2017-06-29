import { combineReducers } from 'redux';
import user from './reducer_user';
import hotel from './reducer_hotel';
import reserve_room from './reducer_reserve_room';
import Hotels from './reducer_set_hotels';

export default combineReducers({
    user,
    hotel,
    reserve_room,
    Hotels,
})