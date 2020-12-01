// content/FirstRent/FirstRent.js
const app = getApp()
const Gdata = app.globalData
import {
  steps
} from "../../mock/RentStep"
import {
  currentStatus
} from "../../mock/currentStatus"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"",
    active: 0,
    steps:steps,
    currentStatus:currentStatus
  },
  selDate(event){
    console.log(event)
    let n = event.currentTarget.dataset.bindex;
    Gdata.SelDate = currentStatus.List[n].date
    wx.navigateTo({
      url: '../SecRent/SecRent',
    })
  },
  onLoad: function(){
    if(Gdata.bookWhat == 0){
      this.setData({title : "主楼 134"})
    }else{
      this.setData({title : "新村活动室"})
    }
    for(let n in currentStatus.List){
      currentStatus.List[n].index = n ;
    }
    console.log(currentStatus.List)
  }
  

})