//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    this.getSStarID();
  },

  getSStarID: function () {
    console.log('Connecting to Wechat server...');
    wx.login(
      {
        success(res) 
        {
          console.log('Wechat server connected.');
          console.log('Connecting to worker server...');
          if (res.code) 
          {
            //发起网络请求
            wx.request(
              {
                url: 'https://747709.iterator-traits.com/api/user/login/',
                method: 'GET',
                data: 
                {
                  code: res.code,
                },
                success(res)
                {
                  console.log('Worker server conneted.');
                  let rj = res.data.return_json;
                  switch (res.data.status_code)
                  {
                    case 1:
                    {
                      console.log(rj.welcome);
                      this.globalData.sstar_id = rj.sstar_id;
                      this.globalData.is_guest = false;
                    }
                    break;
                    case 2:
                    {
                      this.globalData.sstar_id = rj.sstar_id;
                      this.globalData.is_guest = true;
                    }
                    break;
                    case 3:
                    {
                      console.log(rj.reason);
                    }
                    break;
                    default:
                    {

                    }
                  }
                }
              }
            )
          } 
          else 
          {
            console.log('登录失败！' + res.errMsg)
          }
        }
      }
    )
  },

  starBind: function (bind_type, infos) {
    //发起网络请求
    wx.request(
      {
        url: 'https://747709.iterator-traits.com/api/user/bind/',
        method: 'POST',
        data:
        {
          sstar_id: this.globalData.sstar_id,
          type: bind_type,
          bind_info: infos,
        },
        success(res) {
          let rj = res.data.return_json;
          switch (res.data.status_code) 
          {
            case 1:
              {
                this.globalData.sstar_id = rj.sstar_id;
                this.globalData.is_guest = false;
              }
              break;
            case 2:
              {
                console.log(rj.reason);
                this.globalData.is_guest = true;
              }
              break;
            default:
              {

              }
          }
          return res.data.status_code;
        }
      }
    )
  },

  globalData:{
    userInfo: null,
    sstar_id: "",
    is_guest: true
  },
})



