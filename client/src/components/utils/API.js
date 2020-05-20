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
    },
    productSearchKeyword: function(searchText) {
        return axios.get('https://api.barcodespider.com/v1/search?token=842b986ae65f025eead8&s='+encodeURIComponent(searchText))
    },
    saveProduct: function (data) {
        return axios.post("users/saved", data)
    },
    UserList: function () {
        return axios.get("users/saved")
    }
}