var util = require("../../utils/util.js")

var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order_list: [],
    order_status_list: ['已完成', '已支付', '待支付'],
    select_order_list: [],
    select_status: 1,
    edit_view: false,
    classified: {},
    animation_data: null,
    identitiy: "",
    name: ""
  },
  onReady() {
    this.getOrderList();
  },
  onShow() {
    this.getOrderList();
  },
  getOrderList() {
    app.getOrderList({}, this.updateOrderList);
  },
  updateOrderList(res) {
    let data_list = res.data["data"]["order_list"]
    let new_list = [];
    let new_cancel_list = [];
    let new_unpaid_list = [];
    let new_paid_list = [];
    let new_complete_list = [];
    let new_classified = {}
    for (let i = 0; i < Object.keys(this.data.order_status_list).length; i++) {
      new_classified[i] = [];
    }
    for (let i = 0; i < data_list.length; i++) {
      let order = {};
      order["piano_type"] = data_list[i]["brand"];
      order["room_num"] = data_list[i]["room_num"];
      order["price"] = data_list[i]["price"];
      order["start_time"] = util.timestampToTimeString(data_list[i]["start_time"] * 1000);
      order["end_time"] = util.timestampToTimeString(data_list[i]["end_time"] * 1000);
      order["order_date"] = util.timestampToDateString(data_list[i]["start_time"] * 1000);
      order["order_status"] = this.data.order_status_list[data_list[i]["order_status"]];
      order["status"] = data_list[i]["order_status"];

      order["order_id"] = data_list[i]["order_id"];
      order["index"] = i;
      new_list.push(order);
      new_classified[order["status"]].push(order)
    }
    for (let i = 0; i < this.data.order_status_list.length; i++) {
      new_classified[i].reverse();
    }
    this.setData({
      order_list: new_list,
      cancel_list: new_cancel_list,
      unpaid_list: new_unpaid_list,
      paid_list: new_paid_list,
      complete_list: new_complete_list,
      classified: new_classified,
    });
    this.setData({
      select_order_list: this.data.classified[this.data.select_status]
    })
    console.log("cancel_list");
    console.log(this.data.cancel_list)
    console.log("classified")
    console.log(this.data.classified);
    wx.stopPullDownRefresh();
  },
  editOrder(event) {
    this.showEditView()
  },
  
  orderDetail(event) {
    let order_id = this.data.order_list[event.currentTarget.id]["order_id"]
    wx.navigateTo({
      url: '/pages/orderinfo/orderinfo?order_id=' + order_id.toString(),
    })
  },
  orderType(event) {
    let new_type = event.currentTarget.id;
    this.setData({
      select_status: new_type,
      select_order_list: this.data.classified[new_type]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getOrderList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  
})