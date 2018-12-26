var app = getApp()
Page({
  data: {
    dates: '2018-12-27',
    times: '9:00',
    times1: '9:00',
    index: 0,
  },

  //  点击日期组件确定事件  
  bindDateChange: function (e) {
     console.log(e.detail.value)
    this.setData({
      dates: e.detail.value
    })
  },

  // 点击时间组件确定事件 
  //起始时间 
  bindTimeStart: function (e) {
    console.log(e.detail.value)
    this.setData({
      times: e.detail.value
    })
  },
  //终止时间
  bindTimeEnd: function (e) {
    console.log(e.detail.value)
    this.setData({
      times1: e.detail.value
    })
  },
  
  //时间选择后确认按钮
  ok_btn: function () {
    wx.navigateTo({
      url: '../payment/payment'
    })
  },
})
  
  
