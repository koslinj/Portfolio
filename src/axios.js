import axios from "axios"

const instance = axios.create({
    baseURL: 'https://api.emailjs.com/api/v1.0/email/send'
});

export default instance;