var app = getApp()
Page({
  data: {
    userName:'',
    passwd:'',
    mobile:'',
    modalHidden:true,
    show:false,
    buttonDisabled:false
  },
  //事件处理函数
  usernameInput:function(e){
      this.setData({
          userName:e.detail.value
      })
  },
  passwordInput:function(e){
      this.setData({
          passwd:e.detail.value
      })
  },
  mobileInput: function (e) {
    this.setData({
      mobile: e.detail.value
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
  /*confirm:function(){
      this.setData({
            modalHidden:!this.data.modalHidden,
            show:!this.data.show,
            buttonDisabled:!this.data.modalHidden
      })
  },
  cancel:function(){
      this.setData({
            modalHidden:!this.data.modalHidden
      })
  }*/
})