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

const vote = async ( anecdote ) => {
    let newAnecdote = { ...anecdote, votes: anecdote.votes + 1}
    let updatedAnecdote = await axios.put(`${baseURL}/${anecdote.id}`, newAnecdote)
    return updatedAnecdote.data
}

export default {
    getAll,
    create,
    vote
}