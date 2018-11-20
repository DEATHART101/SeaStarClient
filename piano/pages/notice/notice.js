/*var util = require('../../utils/util.js')
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
})*/

var app = getApp()
Page({
  /**页面的初始数据*/
  data: {
    dataList:[
      {
        notice_title:'公告5：',
        notice_content:'因施工暂停使用琴房。',
        notice_name:'清华艺教中心',
        notice_time:'2018-11-20',
        piano_img: '../../images/order.png'
      },{
        notice_title:'公告4：',
        notice_content:'今日暂停使用琴房。',
        notice_name:'清华艺教中心',
        notice_time:'2018-11-11',
        piano_img: '../../images/order.png'        
      }, {
        notice_title:'公告3：',
        notice_content:'因施工暂停使用琴房。',
        notice_name:'清华艺教中心',
        notice_time:'2018-11-1',
        piano_img: '../../images/order.png'        
      }, {
        notice_title:'公告2：',
        notice_content:'今日暂停使用琴房。',
        notice_name:'清华艺教中心',
        notice_time:'2018-10-15',
        piano_img: '../../images/order.png'        
      }, {
        notice_title:'公告1：',
        notice_content:'因施工暂停使用琴房。',
        notice_name:'清华艺教中心',
        notice_time:'2018-10-1',
        piano_img: '../../images/order.png'        
      }, 
       
    ],
  },
})

