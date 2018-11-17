var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  //onLoad: function () {
    //this.setData({
      //logs: (wx.getStorageSync('logs') || []).map(function (log) {
        //return util.formatTime(new Date(log))
      //})
    //})
  //},
  //跳转到选择登录方式界面
  loginBtn: function(options){
    wx.navigateTo({
      url:'../login/login'
    })
  }
})
