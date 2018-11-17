var util = require('../../utils/util.js')
Page({
  data: {
    notice: []
  },
  onLoad: function () {
    this.setData({
      notice: (wx.getStorageSync('notice') || []).map(function (notice) {
        return util.formatTime(new Date(notice))
      })
    })
  }
})