class BackendAPI {
    url() {
        return "http://localhost:8080";
    }
    
    getChallenges(callback) {
        fetch(this.url() + "/challenge/get")
            .then(response => response.json())
            .then(json => {
                callback(json.data);
            });
    }
    
    getChallenge(id, callback) {
        fetch(this.url() + "/challenge/get/" + id)
            .then(response => response.json())
            .then(json => {
                callback(json.data);
            });
    }
    
    createChallenge(structure, callback) {
        const challenge = {
            structure : structure,
            userId : this.getUserId()
        };
        
        fetch(this.url() + "/challenge/create", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(challenge)
            }).then(json => {
                callback(json.data);
            });
    }
    
    getUserId() {
        return Math.floor(100*Math.random()) + 1;
    }
}

export const backendAPI = new BackendAPI()