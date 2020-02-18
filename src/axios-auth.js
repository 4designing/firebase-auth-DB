import axios from 'axios'

//url de authentification api
const instance = axios.create({
        baseURL: 'https://identitytoolkit.googleapis.com/v1'

    })
    //instance.defaults.headers.common['something']='somehing here'

export default instance