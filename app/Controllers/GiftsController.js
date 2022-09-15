import { appState } from "../AppState.js";
import { giftsService } from "../Services/GiftsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function drawGifts() {
  let template = ''
  appState.gifts.forEach(g => template += g.GiftTemplate)
  setHTML('gifts', template)
}

export class GiftsController {
  constructor() {
    this.getGifts()
    appState.on('gifts', drawGifts)
  }

  async getGifts() {
    try {
      await giftsService.getGifts()
    } catch (error) {
      console.log('[GETGIFTS]', error);
    }

  }

  async addGift() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let formData = getFormData(form)
      await giftsService.addGift(formData)
    } catch (error) {
      console.log('[ADD GIFTS]', error);
      Pop.error(error)
    }
  }

  async openGift(id) {
    try {
      await giftsService.openGift(id)
    } catch (error) {
      console.error('[open gift]', error);
      Pop.error(error)
    }
  }


}