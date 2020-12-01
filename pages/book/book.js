//index.js
//获取应用实例
const app = getApp()
 
Page({
  data: {
    
  },
  rentFirst(){
    app.globalData.bookWhat = 0; 
  },
  rentSecond(){
    app.globalData.bookWhat = 1;
  },
  onLoad:function(){
    
  }
})
