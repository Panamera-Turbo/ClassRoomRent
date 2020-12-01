const app=getApp()
const Gdata = app.globalData
import Toast from '@vant/weapp/toast/toast';
function myLogin (){
  let pake={}
  pake.userId =  Gdata.userId
  pake.password = Gdata.password
  wx.request( {
    url: "https://www.baidu.com",
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST",
    data:"",
    timeout:180000,
    success(res){
      console.log(Gdata.userId) 
      console.log(res.data)
      setTimeout(()=>{
          wx.switchTab({
            url: "../book/book"
          })
        }
        ,1000)
      Toast("登录成功！")
    },
    fail(rej){
      Toast("登陆失败！")
    }
  })
}
//用于字符串判断是否为空
function pankong(mes){
  if(mes.replace(/^\s|\s$/g,'') == "" )
    return true
  else  return false
}

export {
  myLogin,
  pankong

}

