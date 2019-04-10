

export default (state = {}, action) => {
    switch(action.type){
        case 'add_client': {
        return action.payload
        }
        default:{
        return state
        }
    }
    
};