// content/FirstRent/FirstRent.js
import {
  steps
} from "../../mock/RentStep"
import {
  currentLeft
} from "../../mock/currentLeft"

const app = getApp()
const Gdata = app.globalData
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
    steps:steps,
    currentLeft:currentLeft ,
    title: ""
  },
  selTime(event){
    console.log(Gdata.SelDate)
    console.log(event)
    let n = event.currentTarget.dataset.bindex;
    Gdata.SelTime = currentLeft.List[n].during
    wx.navigateTo({
      url: '../ThirdRent/ThirdRent',
    })
  },
  onLoad: function(){
    this.setData({title : Gdata.SelDate})
  }
})