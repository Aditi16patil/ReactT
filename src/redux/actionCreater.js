export function incrementNumber(payload){
    return{
        type: 'INCREMENT_NUMBER',
        payload: payload
    }
}

export function decrementNumber(payload){
    return{
        type: 'DECREMENT_NUMBER',
        payload: payload
    }}

    export function checkChange(){
        return{
            type: 'CHECK_CHANGE'
            
        }
    }

    export function setUserName(payload){
        return{
            type: 'SET_USERNAME',
            payload: payload
            
        }
    }