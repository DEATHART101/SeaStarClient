var app = getApp()
Page({
    THU_team_order: function() {
        wx.navigateTo({
            url:'../THUteamOrder/THUteamOrder'
        })
    },
    others_order: function() {
        wx.navigateTo({
            url:'../OthersOrder/OthersOrder'
        })
    },
})