export const deleteDog = (dogId, rescueId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/rescues/${rescueId}/dogs/${dogId}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(rescue => dispatch({
            type: "DELETE_DOG", 
            payload: rescue
        }))
    }
}