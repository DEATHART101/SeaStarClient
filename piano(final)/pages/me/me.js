//var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  
  onLoad: function () {

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      this.getBindInfo();
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        this.getBindInfo()
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          this.getBindInfo()
        }
      })
    }
  },
  onShow() {
    this.getBindInfo();
  },
  getBindInfo() {
    let _this = this;
    app.getBindInfo({}, (res) => {
      if (res.data["data"]["permission"] > 0) {
        _this.setData({ identitiy: res.data["data"]["identity"], name: res.data["data"]["name"] })
        let info = _this.data.userInfo;
        info["nickName"] = res.data["data"]["name"] + '(' + res.data["data"]["identity"] + ')';
        console.log(info);
        _this.setData({ userInfo: info });
      }
    })
  },
  getUserInfo: function (e) {

    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    this.getBindInfo();
  },
  dingdan_btn() {
    wx.navigateTo({
      url: '/pages/myorder/myorder',
    })
  },
  goToBindPage() {
    wx.navigateTo({
      url: '/pages/out/out',
    })
  }
})

