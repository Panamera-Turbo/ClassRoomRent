import{
 pankong,
 myLogin
} from "../../utils/util"
import Toast from '@vant/weapp/toast/toast';
const app = getApp()
const Gdata = app.globalData
Page({
  data: {
    status: "登录",
    loading: false,
    loginStatus: false,
    password:"",
    userId:""
  },
  click() {
   let that = this.data
   if(pankong(that.userId)){
      Toast("请输入用户名")
   }else if(pankong(that.password)){
      Toast("请输入密码")
   }else{
     Gdata.userId=that.userId
     Gdata.password=that.password
     myLogin()
   }
   
   

  }
   


})