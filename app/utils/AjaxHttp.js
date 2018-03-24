let request = require('superagent')
let baseURL = "https://ajh-api.aihuishou.com/api/"

export function get(url, params) {

    request.get(baseURL + url)
        .query(params)
        .retry(3)
        .end(err => {
            console.log(err);
        }, res => {
            console.log(res);
        });

}

export function post(url, params) {
    request.post(baseURL + url)
        .set('Content-Type', 'application/json')
        .send(params)
        .retry(3)
        .end(err => {
            console.log(err);
        }, res => {
            console.log(res);
        });

}

function sign(params) {


}