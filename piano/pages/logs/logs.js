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
  },

  //其余六个按钮跳转函数
  my_info_btn: function () {
    wx.navigateTo({
      
    })
  },
  modify_info_btn: function () {
    wx.navigateTo({

    })
  },
  now_order_btn: function () {
    wx.navigateTo({

    })
  },
  previous_order_btn: function () {
    wx.navigateTo({

    })
  },
  notify_btn: function () {
    wx.navigateTo({

    })
  },
  longtime_order_btn: function () {
    wx.navigateTo({

    })
  },
})
