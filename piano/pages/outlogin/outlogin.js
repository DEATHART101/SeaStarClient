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
    if(this.data.userName.length == 0 || this.data.passwd.length == 0 
      || this.data.mobile.length == 0){
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