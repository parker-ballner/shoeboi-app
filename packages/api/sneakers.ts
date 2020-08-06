// import SneakersRunner from '../../../shoeboi/services/runner'
import * as SneakersApi from '@shoeboi/api'
import * as SneakersRunner from '@shoeboi/runner'
// import { nanoid } from 'nanoid/async/index.native'

// function generateUUID(): string { // Public Domain/MIT
//     var d = new Date().getTime();//Timestamp
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//         var r = Math.random() * 16;//random number between 0 and 16
//         if(d > 0){//Use timestamp until depleted
//             r = (d + r)%16 | 0;
//             d = Math.floor(d/16);
//         }
//         return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
//     });
// }

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

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

export const RunEntry = async (productId: string, skuId: string): Promise<SneakersApi.Schema.Sneakers.Api.Launch.Entry.Create.Response|undefined> => {
    const runner = new SneakersRunner.SneakersRunner(user)

    const generatedIds = {
        shippingOptionsId: uuidv4(),
        checkoutId: uuidv4(),
        paymentPreviewId: uuidv4()
    }

    console.log(JSON.stringify(generatedIds))

    try {
        return await runner.SendIt(productId, skuId, generatedIds)
    } catch (e) {
        console.log(e)
        return undefined
    }
}

export const CheckEntry = async (entryId: string): Promise<SneakersApi.Schema.Sneakers.Api.Launch.Entry.Get.GetOne.Response|undefined> => {
    const apiClient = new SneakersApi.Sneakers(user)
    try {
        await apiClient.TokenRefresh()
        return await apiClient.Entry(entryId)
    } catch (e) {
        console.log(e)
        return undefined
    }
}