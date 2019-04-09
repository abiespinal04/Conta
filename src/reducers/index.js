
import {combineReducers} from 'redux';
import LibraryReducer from './LibraryReducer';
import AddClientReducer from './AddClientReducer'


export default combineReducers({
    library: LibraryReducer,
    client:AddClientReducer
});

