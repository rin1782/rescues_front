export default function rescueReducer(state = {rescues: []}, action) {
    
   switch(action.type) {
        case "FETCH_RESCUES":
            return {rescues: action.payload}
        case "ADD_RESCUE":
            return {...state, rescues: [...state.rescues, action.payload]}
        case "ADD_DOG":
            return {...state, rescues: state.rescues.map(rescue => {
                if (rescue.id === action.payload.id) {
                    return action.payload
                } else {
                    return rescue
                }
            })
        }
        // case "ADD_PIC":
        //     return {...state, rescues: [...state.rescues, action.payload]}
        case "DELETE_DOG": 
            let adoptedDog = state.rescues.map(rescue => {
                if (rescue.id === action.payload.id) {
                    return action.payload
                } else {
                    return rescue
                }
            })
            return {...state, rescues: adoptedDog}
            default:
                return state
   }
}

