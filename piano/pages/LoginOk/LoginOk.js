var app = getApp()
//

Page({
    data: {
    //dataList:[
      //{
        title:'',
        id:   '',
      //},
    //],
  },
  //用户信息页面点击确认按钮跳转页面
  okinfo: function(){
    wx.switchTab({
      url:'../logs/logs'
    })
  }
})