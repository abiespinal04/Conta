

export default (state = null, action) => {
    switch(action.type){
        case 'add_client': 
        console.log(action.payload)
        return action.payload;
        
        default:
        return state
    }
};