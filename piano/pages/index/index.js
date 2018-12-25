//index.js
//获取应用实例
var app = getApp()
Page({
  //data: {
    //motto: 'Sea Star',
    //userInfo: {}
  //},

  data: {
    navbar: ['钢琴房', '小琴房'],
    currentTab: 0,
    //左侧导航
    indexSize: 0,
    indicatorDots: false,
    autoplay: false,
    duration: 0, //可以控制动画
    list: '',
    //钢琴房数据
    dataList: [
      //id=1
      {
        id: 1,
        title: '校内学生',
        list: [
          {
            date: '',
            pianoroom_number: '',
            time: '',
            price: '',
            people_number: '',
          },  
          
        ],
      },
      //id=2
      {
        id: 2,
        title: '教职工',
        list: [
          //琴房信息
        ],
      },
      //id=3
      {
        id: 3,
        title: '键盘队/合唱队',
        list: [
          //琴房信息
        ],
      },
      //id=4
      {
        id: 4,
        title: '校外人员',
        list: [
          //琴房信息
        ],
      },
      
    ],

    //小琴房数据
    dataList1: [
      //id=1
      {
        id: 1,
        title: '校内学生',
        list: [
          //琴房信息
          {
            date: '',
            pianoroom_number: '',
            time: '',
            price: '',
            people_number: '',
          },  
        ],
      },
      //id=2
      {
        id: 2,
        title: '教职工',
        list: [
          //琴房信息
        ],
      },
      //id=3
      {
        id: 3,
        title: '乐队',
        list: [
          //琴房信息
        ],
      },
      //id=4
      {
        id: 4,
        title: '校外人员',
        list: [
          //琴房信息
        ],
      },
      //
    ],

  },
  
  //琴房预约按钮,跳转函数
  order_btn: function () {

  },

  change(e) {
    this.setData({
      indexSize: e.detail.current
    })
  },
  scrollTo(e) {
    this.setData({
      indexSize: e.target.dataset.index
    })
  },


  
  

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      that.update()
    }) 
  },

    
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }


})
  