

export default (state = null, action) => {
    switch(action.type){
        case 'addUserss': { 
        console.log("Action was trigered " , action.payload)
        return action.payload;
        }
        default:
        return state
    }
};