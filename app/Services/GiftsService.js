import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { SandboxServer } from "./AxiosService.js"

class GiftsService {
  async addGift(formData) {
    const res = await SandboxServer.post('api/gifts', formData)
    console.log(res.data)
    let gift = new Gift(res.data)
    appState.gifts = [gift, ...appState.gifts]
  }
  async openGift(id) {
    const gift = appState.gifts.find(g => g.id == id)

    gift.opened = !gift.opened
    const res = await SandboxServer.put(`api/gifts/${id}`, gift)
    gift.url = res.data.url
    appState.emit('gifts')
  }

  async getGifts() {
    const res = await SandboxServer.get('api/gifts')
    console.log('getGifts', res.data);
    appState.gifts = res.data.map(g => new Gift(g))
  }

}

export const giftsService = new GiftsService()