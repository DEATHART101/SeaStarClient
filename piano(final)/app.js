//app.js
var util = require("utils/util.js")
let app = App({
  onLaunch: function () {
    try {
      this.globalData.user_session = wx.getStorageSync("user_session");
    } catch (e) {
      console.log("wrong ");
    }
    if (!this.globalData.user_session) {
      this.getUserSession(() => {
      });
    } else {
      console.log("in storage");
      console.log(this.globalData.user_session);
    }

    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo
              this.globalData.user_nickname = res.userInfo.nickName;
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  getUserSession(callback, arg1 = null, arg2 = null, arg3 = null, arg4 = null) {
    wx.login({
      success: res => {
        console.log("login return ");
        console.log(res);
        wx.request({
          url: this.globalData.backend + `/api/u/login/`,
          data: {
            code: res.code
          },
          method: "POST",
          header: {
            "content-type": 'application/x-www-form-urlencoded'
          },
          
          
          success: res => {
            console.log("paino session return ");
            console.log(res);
            if (res.data["code"] == 1) {
              this.globalData.user_session = res.data["data"]["session"];
              wx.setStorageSync("user_session", this.globalData.user_session);
              console.log("get ");
              console.log(this.globalData.user_session);
              callback(arg1, arg2, arg3, arg4);
            } else {
              util.msgPrompt(res.data["msg"], false);
            }
          },
          fail: res => {
            util.msgPrompt("get session failed", false);
          }
        })
      },
      fail: res => {
        util.msgPrompt("login failed", false);
      }
    })
  },
  getRoomList(data, successFunc) {
    this._post('/api/u/order/piano-rooms-list/', data, successFunc)
  },
  submitOrder(data, successFunc) {
    this._post(`/api/u/order/normal/`, data, successFunc)
  },
  getOrderList(data, successFunc) {
    this._get(`/api/u/order/list`, data, successFunc)
  },
  getNewsList(data, successFunc) {
    this._post(`/api/u/news/list/`, data, successFunc)
  },
  getPayMsg(data, successFunc) {
    this._post(`/api/u/order/pay/`, data, successFunc)
  },
  getBindInfo(data, successFunc) {
    this._get(`/api/u/bind/info/`, data, successFunc)
  },
  payForOrder(timestamp, nonce_str, prepare_id, sign) {
    console.log(timestamp);
    console.log(nonce_str);
    console.log(prepare_id);
    console.log(sign);


    wx.requestPayment({
      timeStamp: timestamp,
      nonceStr: nonce_str,
      package: prepare_id,
      signType: 'MD5',
      paySign: sign,
      success: function (res) {
        console.log("成功支付");
        console.log(res);
        util.msgPrompt('成功支付');
        wx.navigateTo({
          url: '/pages/myorder/myorder',
        })
      },
      fail: function (res) {
        console.log("支付失败");
        console.log(res);
        util.msgPrompt('支付失败', false);
        wx.navigateTo({
           url: '/pages/myorder/myorder',
        })
      }
    })
  },

  _post(url, data, successFunc = res => {
    console.log(res)
  }, failFunc = res => {
    console.log(res)
  }) {
    if (this.globalData.user_session) {
      let _this = this;
      this.globalData.network_busy = true;
      setTimeout(() => {
        if (_this.globalData.network_busy)
          wx.showLoading({
            title: 'loading',
          })
      }, this.globalData.network_waiting)
      console.log(url + "   data:");
      console.log(data);
      console.log("session: " + this.globalData.user_session)
      wx.request({
        url: this.globalData.backend + url,
        data: data,
        method: "POST",
        header: {
          "content-type": 'application/x-www-form-urlencoded',
          "authorization": this.globalData.user_session
          
        },
        
        success: res => {
          console.log(url + "   return:");
          console.log(res);
          if (res.data["code"] == 0)
            util.msgPrompt(res.data["msg"], false);
          else
            successFunc(res);
        },
        fail: res => {
          failFunc(res);
        },
        complete: res => {
          this.globalData.network_busy = false;
          wx.hideLoading()
        }
      })
    } else {
      this.getUserSession(this._post, url, data, successFunc, failFunc);
    }
  },
  _get(url, data, successFunc = res => {
    console.log(res)
  }, failFunc = res => {
    console.log(res)
  }) {
    if (this.globalData.user_session) {
      let _this = this;
      this.globalData.network_busy = true;
      setTimeout(() => {
        if (_this.globalData.network_busy)
          wx.showLoading({
            title: 'loading',
          })
      }, this.globalData.network_waiting)
      console.log(url + "   data:");
      console.log(data);
      console.log("session: " + this.globalData.user_session)
      wx.request({
        url: this.globalData.backend + url,
        data: data,
        header: {
          "authorization": this.globalData.user_session,
        },
        method: "GET",
        success: res => {
          console.log(url + "   return:");
          console.log(res);
          if (res.data["code"] == 0)
            util.msgPrompt(res.data["msg"], false);
          else
            successFunc(res);
        },
        fail: res => {
          failFunc(res);
        },
        complete: res => {
          this.globalData.network_busy = false;
          wx.hideLoading()
        }
      })
    } else
      this.getUserSession(this._get, url, data, successFunc, failFunc)
  },
  globalData: {
    userInfo: null,
    user_session: null,
    user_nickname: "默认用户",
    backend: `https://747709.iterator-traits.com`,
    user_session: null,
    network_waiting: 0,
    user_bind: null
  } 
})
module.exports = app;


