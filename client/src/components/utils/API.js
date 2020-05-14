import axios from 'axios';

export default {
    register: function (User) {
        return axios.post ('users/register', User)
        .then ( res => {
            alert("Registered")
        })
    },
    login: function (User) {
        return axios.post ('users/login', User)
        .then (res => {
            localStorage.setItem('usertoken', res.data);
            return res.data
        })
        .catch (err => console.log(err))
    }

    
}