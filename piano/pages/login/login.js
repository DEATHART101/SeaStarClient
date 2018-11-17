var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      login: (wx.getStorageSync('login') || []).map(function (login) {
        return util.formatTime(new Date(login))
      })
    })
  },
  //跳转到选择登录方式界面
  THUloginBtn: function(options){
    wx.navigateTo({
      url:'../THUlogin/THUlogin'
    })
  },
  outloginBtn: function(options){
    wx.navigateTo({
      url:'../outlogin/outlogin'
    })
  }
})