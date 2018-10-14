export default class StateStore {
    getChallenges(callback) {
        fetch("http://localhost:8080/challenge/get")
            .then(response => response.json())
            .then(json => {
                callback(json.data);
            });
    }
}

export const stateStore = new StateStore()