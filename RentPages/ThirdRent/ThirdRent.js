// content/FirstRent/FirstRent.js
const app = getApp()
const Gdata = app.globalData
import Toast from '@vant/weapp/toast/toast';
import {
  steps
} from "../../mock/RentStep"
import{
  pankong
} from "../../utils/util"

Page({
  data: {
    active: 2,
    steps:steps,
    beizhu:"",
    loading:false,
    use_media: false,
    mesMedia: "不需要使用"
  },
  onMedia(e){
    console.log(e);
    let i = !this.data.use_media
    if(i){
      this.setData({mesMedia: "需要使用",use_media:i})
    }else {
      this.setData({mesMedia: "不需要使用",use_media:i})
    }
    
  },
  click() {
    let that = this.data;
    if (pankong(that.applyname)) { 
      Toast("请填写姓名")
    }else if(pankong(that.phone)){
      Toast("请填写联系方式")
    }else if(pankong(that.beizhu)){
      Toast("请填写申请原因")
    }else if( !(/^1[3456789]\d{9}$/.test(that.phone)) ) {
      Toast("请检查手机格式")
    }else{
      Gdata.phone = that.phone;
      Gdata.applyname = that.applyname;
      Gdata.beizhu = that.beizhu;
      
      const fakesubmit = new Promise( (res , rej) =>{
        if(this.data.loading == false ){
          this.setData({loading: true });
        }
        setTimeout(()=>{
          this.setData({loginStatus:true});
          res(1)
        },1000)
      });
      fakesubmit.then((e)=>{
        setTimeout(()=>{
          wx.reLaunch({
            url:"../../pages/booked/booked"
          })
        },1000)
         Toast("申请成功，等待审批")
        
      })
      .catch((e)=>{
        showErrToast(e);
      })
    }
  }
  
})