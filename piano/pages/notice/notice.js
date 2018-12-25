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
        notice_title:'公告：',                 /*公告标题 */
        notice_content: '因施工暂停使用琴房。',   /*公告内容 */
        notice_name: '清华艺教中心',              /*（公告署名）：清华艺教中心 */
        notice_time: '2018-10-1',                 /*公告时间 */
          
      },  

      
    ],

    
 
},
    
      
        
    
    

    
 
})



 
  



