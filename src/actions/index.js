export const addUser = (librayId) => {
    return {
        type:'addUser',
        payload:librayId
    }
}
export const AddClient = (client) => {
    return {
        type:'add_client',
       
        payload:client
    }
}
