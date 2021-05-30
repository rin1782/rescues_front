export default function rescueReducer(state = {rescues: []}, action) {

   switch(action.type) {
        case 'FETCH_RESCUES':
            return {rescues: action.payload}
        default:
            return state
   }
}

