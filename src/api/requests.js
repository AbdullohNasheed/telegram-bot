import axios from 'axios';

export let url = "http://172.20.10.8:8081/api"

export let requests = {
    news: {
        createAndSend: (credentails) => axios.post(`${url}/news`, credentails)
    },
    partners: {
        getPartners: () => axios.get(`${url}/partner`)
    },
    products: {
        getProducts: () => axios.get(`${url}/product`)
    },
    uploads: {
        uploadImage: (credentails) => axios.post(`${url}/file-upload`, credentails)
    },
    users: {
        getUsers: () => axios.get(`${url}/users`)
    },
}
