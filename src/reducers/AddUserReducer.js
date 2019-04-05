export default (state = null, action) => {
    switch(action.type){
        case 'addUser':
        return action.payload;
        default:
        return state
    }
};