class BackendAPI {
    getChallenges(callback) {
        fetch("http://localhost:8080/challenge/get")
            .then(response => response.json())
            .then(json => {
                callback(json.data);
            });
    }
    
    getChallenge(id, callback) {
        fetch("http://localhost:8080/challenge/get/" + id)
            .then(response => response.json())
            .then(json => {
                callback(json.data);
            });
    }
}

export const backendAPI = new BackendAPI()