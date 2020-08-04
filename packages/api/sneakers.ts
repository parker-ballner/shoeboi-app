// import SneakersRunner from '../../../shoeboi/services/runner'
import * as SneakersApi from '@shoeboi/api'

const user = {
    
} as SneakersApi.Schema.Sneakers.User

export const GetUpcomingContent = async (limit: number = 10): Promise<SneakersApi.Schema.Sneakers.Api.Content.Response.Thread[]> => {
    const content = await GetContent()
    return content.filter(item => item.product.upcoming && item.product.available && new Date(item.product.startSellDate) > new Date()).sort((a, b) => (new Date(a.product.startSellDate).getTime() - new Date(b.product.startSellDate).getTime())).slice(0, limit)
}

export const GetContent = async (offset: number = 0, orderBy: string = 'published'): Promise<SneakersApi.Schema.Sneakers.Api.Content.Response.Thread[]> => {
    const apiClient = new SneakersApi.Sneakers(user)

    try {
        await apiClient.TokenRefresh()

        const content = await apiClient.Content(offset, orderBy)
    
        console.log('got a response')

        return content.threads
    } catch (e) {
        console.log(e)
        return []
    }
}