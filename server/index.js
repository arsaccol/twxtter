import API from './src/api.js'

(async function main() {
    try {
        const api = API.createAPI()
    }
    catch(err) {
        console.error({err})
    }

})()