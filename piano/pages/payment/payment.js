var app = getApp()
Page({
  /**页面的初始数据*/
  data: {
    money:' '
  }, 

  payment: function () {
    wx.navigateTo({
     
    })
  },
  cancel: function () {
    wx.navigateTo({
      url: '../choose_time_order/choose_time_order'
    })
  },
})