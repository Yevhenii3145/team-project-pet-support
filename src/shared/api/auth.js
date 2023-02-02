import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:4001/api'
})

const setToken = (token) => {
    if (token) {
        return instance.defaults.headers.common.authorization = `Bearer ${token} `
    } 
    instance.defaults.headers.common.authorization = ''
}

// export const signup = async (signupData) => {
//     const { data } = await instance.post('/users/signup', signupData)
//     instance.defaults.headers.common.authorization = `Bearer ${data.token} `
//     console.log('data', data)
//     console.log('instance', instance)
//     return data
// }

export const login = async (loginData) => {
    const { data } = await instance.post('/users/login', loginData)
    instance.defaults.headers.common.authorization = `Bearer ${data.token} `
    console.log('data', data)
    return data
} 

export const logout = async () => {
    const { data } = await instance.post('/users/logout')
    console.log('data', data)
    return data
}

export const getCurrentUser = async (token) => {
    try {
        setToken(token)
        const { data } = await instance.get('/users/current')
        return data
    } catch (error) {
        setToken()
        throw error
    }
}

export default instance