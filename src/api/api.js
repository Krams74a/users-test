import * as axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000"
})

export const usersAPI = {
    getUsers() {
        return axiosInstance.get(`/users`)
            .then(response => {
                return response.data
            })
    },
    addUser(firstName, secondName, age) {
        return axiosInstance.post(`/users`, {firstName, secondName, age})
            .then(response => {
                console.log(response)
                return response.data
            })
    },
}
