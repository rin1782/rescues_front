export function addRescue(data){
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/rescues", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(r => r.json())
        .then(rescue => dispatch(
            {type: 'ADD_RESCUE', 
            payload: rescue})
        );
    }
}