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
  /*login_btn_click:function(){
      if(this.data.username.length==0 || this.data.password.length==0){
          this.setData({
            modalHidden:!this.data.modalHidden
        })
      }
  },*/
  login_btn_click:function(){
      wx.navigateTo({
      url:'../LoginOk/LoginOk'
    })
  },
  
})