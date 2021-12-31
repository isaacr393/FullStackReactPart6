import axios from 'axios'

const baseURL = 'http://localhost:3001/anecdotes'

const getAll =  async () => {
    let res =  await axios.get(`${baseURL}`)
    return res.data
}

export default {
    getAll
}