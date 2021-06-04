export const addPic = (rescueId, dogId, img) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/rescues/${rescueId}/dogs/${dogId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(img)
        })
        .then(r => r.json())
        .then(rescue => dispatch({
            type: "ADD_PIC", payload: rescue
        }))
    }
}