var app = getApp()
Page({
  data: {
    username:'',
    password:'',
    modalHidden:true,
    show:false,
    buttonDisabled:false
  },
  //事件处理函数
  usernameInput:function(e){
      this.setData({
          username:e.detail.value
      })
  },
  passwordInput:function(e){
      this.setData({
          password:e.detail.value
      })
  },
  login_btn_click:function(){
      if(this.data.username.length==0 || this.data.password.length==0){
          this.setData({
            modalHidden:!this.data.modalHidden
        })
      }
  },
  confirm:function(){
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
  }
})