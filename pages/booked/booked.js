// pages/booked/booked.js.js
import {
  booked
} from "../../mock/booked"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    booked: booked
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this.data.booked
      for(let n in that.List) {
        if(that.List[n].status==="1"){
          that.List[n].status ="danger"
          that.List[n].text = "审批中"
          that.List[n].icon = "bulb-o"
        }else{
          that.List[n].status ="success"
          that.List[n].text = "申请成功"
          that.List[n].icon = "certificate"
        }
      }
    this.setData({booked: that })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})