import axios from 'axios'

const baseURL = 'http://localhost:3001/anecdotes'

const getAll =  async () => {
    let res =  await axios.get(`${baseURL}`)
    return res.data
}

const create = async ( content ) => {
    let newAnecdote = await axios.post(baseURL, {
        content,
        votes:0
    })
    return newAnecdote.data
}

export default {
    getAll,
    create
}