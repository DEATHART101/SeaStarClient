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
  /*login_btn_click:function(){
      if(this.data.username.length==0 || this.data.password.length==0){
          this.setData({
            modalHidden:!this.data.modalHidden
        })
      }
  },*/
  login_btn_click:function(){
    /*
    wx.navigateTo({
      url:'../index/PianoOrder'
    })
    */

    let bind_info = {};
    bind_info.student_id = this.data.username;
    bind_info.password = this.data.password;
    let status = app.starBind(1, bind_info); 
    switch (status)
    {
      case 1:
      {
        wx.navigateTo({
          url: '../index/PianoOrder'
        })
      }
      break;
      case 2:
      {
        console.log("绑定失败！");
        wx.navigateTo({
          url: '../index/PianoOrder'
        })
      }
      break;
      default:
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