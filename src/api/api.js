import * as axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://mongodb-test-two.vercel.app/api"
    //baseURL: "http://localhost:5000/api",
})

export const postsAPI = {
    getPosts() {
        return axiosInstance.get(`/posts`, { headers: {Authorization: "Bearer "+localStorage.getItem("token")} })
            .then(response => {
                return response.data
            })
    },
    addPost(author, title, content) {
        return axiosInstance.post(`/posts`, {author, title, content})
            .then(response => {
                return response.data
            })
    },
    deletePost(id) {
        return axiosInstance.delete(`/posts/${id}`)
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    registration(username, password) {
        return axiosInstance.post(`/auth/registration`, {username, password})
    },
    login(username, password) {
        return axiosInstance.post(`/auth/login`, {username, password})
            .then(response => {
                return response.data
            })
            .catch((error) => {
                return error.response
            })
    }
}

export const usersAPI = {
    getUsers() {
        return axiosInstance.get(`/users`, { headers: {Authorization: "Bearer "+localStorage.getItem("token")} })
            .then(response => {
                return response.data
            })
    },
}
