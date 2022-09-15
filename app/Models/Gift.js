export class Gift {
  constructor(data) {
    this.id = data._id
    this.opened = data.opened || false
    this.url = data.url
    this.tag = data.tag
  }




  get GiftTemplate() {
    return /*html*/ `
    <div class="col-md-4">
     <div class="card elevation-2 m-4" onclick="app.giftsController.openGift('${this.id}')">
        <div class="card-body">
        <img src="${this.opened ? this.url : 'https://th.bing.com/th/id/R.1b79734e4467bf188840653b348b6e6c?rik=9Lx3SvGtDIAEMw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fgift%2fgift_PNG5984.png&ehk=oSn5leg0A0sfOWYNnUqU4iubknpW%2f%2bxRRa%2bfSj5G9xc%3d&risl=&pid=ImgRaw&r=0'}" />
        <p class="text-center">${this.tag}</p>
        </div >
      </div > 
      </div >
      `

  }
}