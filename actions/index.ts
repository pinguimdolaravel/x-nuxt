import auth from './auth'
import tweet from './tweet'

export interface BaseResponse<T> {
    status: string
    message: string
    data: T
}


export default {
    auth,
    tweet
}
