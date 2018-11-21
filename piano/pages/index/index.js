//index.js
//获取应用实例
var app = getApp()
Page({
  //data: {
    //motto: 'Sea Star',
    //userInfo: {}
  //},
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    
  },

  //点击首页中“琴房信息”和“琴房预约”两个按钮，事件处理函数
  //琴房信息按钮
  PianoMessage: function() {
    wx.navigateTo({
      url:'../index/PianoMessage'
    })
  },
  //琴房预约按钮
  PianoOrder: function() {
    wx.navigateTo({
      url:'../index/PianoOrder'
    })
  },
})
