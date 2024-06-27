import type { BaseResponse } from '~/actions'
import type { Tweet } from '~/actions/tweet/index'
import { useTweetStore } from '#imports'

export async function fetchTweets() {
    const response = await useGet('/api/tweets')
    const data = response.data.value as BaseResponse<Tweet[]>

    const store = useTweetStore()
    store.loadTweets(data.data)
}
