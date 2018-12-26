var app = getApp()
Page({
  data: {
    id:'',
    passwd:'',
    modalHidden:true,
    show:false,
    buttonDisabled:false
  },
  //事件处理函数
  usernameInput:function(e){
      this.setData({
          id:e.detail.value
      })
  },
  passwordInput:function(e){
      this.setData({
          passwd:e.detail.value
      })
  },
  
  login_btn_click:function(){
      if(this.data.id.length == 0 || this.data.passwd.length == 0){
        wx.showToast({
            title: '请输入信息！',
            icon: 'loading',
            duration: 1000,
        })
      } 
      else{
        wx.navigateTo({
        url:'../LoginOk/LoginOk'
        })

      }
   },
  
})