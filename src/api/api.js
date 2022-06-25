import * as axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://mongodb-test-two.vercel.app/api"
})

export const usersAPI = {
    getPosts() {
        return axiosInstance.get(`/posts`)
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
