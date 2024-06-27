import { create } from './create'
import { fetchTweets } from './fetchTweets'

export interface Tweet {
    id: string
    content: string
    created_at: string
    updated_at: string
    user_id: string
}

export default {
    create,
    fetchTweets
}
