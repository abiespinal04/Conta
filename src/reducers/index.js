
import {combineReducers} from 'redux';
import LibraryReducer from './LibraryReducer';
import AddUserReducer from './AddUserReducer'


export default combineReducers({
    library: LibraryReducer,
    User:AddUserReducer
});

