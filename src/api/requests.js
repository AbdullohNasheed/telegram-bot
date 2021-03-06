import axios from "axios";

export let url = "http://192.168.0.102:8081/api";

export let requests = {
    news: {
        createAndSend: (credentails) => axios.post(`${url}/news`, credentails),
    },
    partners: {
        getPartners: () => axios.get(`${url}/partner`),
        addPartner: (credentials) => axios.post(`${url}/partner`, credentials)
    },
    products: {
        getProducts: () => axios.get(`${url}/product`),
        createProduct: (credentails) =>
            axios.post(`${url}/product`, credentails),
    },
    uploads: {
        uploadImage: (credentails) =>
            axios.post(`${url}/file-upload`, credentails),
    },
    users: {
        getUsers: () => axios.get(`${url}/users`),
    },
    category: {
        getCategories: () => axios.get(`${url}/category`),
    },
};
