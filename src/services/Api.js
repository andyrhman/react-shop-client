import axios from "axios";

const http = axios.create({
    baseURL: process.env.REACT_APP_SERVER_ENDPOINT_1,
    withCredentials: true
});

export default http;