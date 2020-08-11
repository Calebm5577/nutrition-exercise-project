const axios = require("axios");

const ApiRequest = param => {
    let api_key = "c5c002742c333a4c828f8425af9e8e30";
    let api_id = "fbf14b12";
    return axios
        .get(`https://trackapi.nutritionix.com/v2/search/instant?query=${param}`, {
            headers: {
                "x-app-id": api_id,
                "x-app-key": api_key
            }
        })
        .then(function (response) {
            console.log(response);
        });
};

export default ApiRequest;