export const addDog = (dog, rescueId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/rescues/${rescueId}/dogs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(dog)
        })
        .then(r => r.json())
        .then(rescue => dispatch({
            type: "ADD_DOG", payload: rescue
        }))
    }
}