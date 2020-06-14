//app.js
App({

  globalData: {
    baseServer: "http://127.0.0.1:8000/",
    userInfo: false,
    CANIUSE:false
  },

  onLaunch: function () {

  },
  onShow: function () {
  },

  login(){
    var code, encryptedData, iv;
    var that = this;
    //判断用户登录是否过期
    wx.checkSession({
      success(){
        console.log('登录态未过期');
        wx.getStorage({
          key: 'uuid',
          success: function(res) {
            console.log(res.data);
            if(!res.data){
              that.loginIn();
              return
            }
            wx.request({
              url: that.globalData.baseServer + "API/miniprogram/mini/login/",
              method: 'POST',
              header: { 'content-type': 'application/x-www-form-urlencoded' },
              data: {'uuid': res.data},
              success(res){
                console.log(res, res.data.status);
                if(!res.data.status){
                  that.loginIn();
                }
              }
            })
          }
        })
      }
    })
  }

})