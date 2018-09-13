import axios from "axios";

/* TODO: fill with actions

format:
export const getUser = () => dispatch => {
    dispatch({ type: 'FETCHING_USER' });

    axios.get('endpoint URL').then(response => {
        dispatch({ type: 'FETCHED_USER', user: response.data });
    }).catch(error => {
        dispatch({ type: 'ERROR', errorMessage: 'Error fetching the user' });
    })
}
*/

export const getUser = () => dispatch => {
    dispatch({ type: 'FETCHING_USER '});

    const headers = {
        "Content-Type":"application/json"
    }
    
    const token = getState().user.token;

    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }


    axios.get("http://djangodashboard.herokuapp.com/rest-auth/login/", { headers })
    .then(res => {
        if(res.status < 500){
            return res.json().then(data => {
                return {status: res.status, data};
            });
        } else {
            console.log("Server error");
            throw res;
        }
    })
    .then(res => {
        if(res.status === 200){
            dispatch({ type: 'FETCHED_TIMEOFF', timeoff: res.data })
            return res.data;
        } else if (res,status >= 400 && res.status < 500){
            dispatch({ type: 'ERROR', data: res.data});
            throw res.data;
        }
    });
}