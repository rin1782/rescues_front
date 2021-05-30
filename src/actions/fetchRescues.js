

export function fetchRescues(){
    return (dispatch) => {
    fetch("http://localhost:3000/api/v1/rescues")
    .then(r => r.json())
    .then(rescues => dispatch({
        type: 'FETCH_RESCUES', 
        payload: rescues
    }))
}
}
