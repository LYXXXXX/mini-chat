//app.js
App({

  globalData: {
    baseServer: "http://123.57.242.170:8000/",
    userInfo: false,
    CANIUSE:false
  },

  onLaunch: function () {
    this.userLogin();
  },
  onShow: function () {
  },



  userLogin: function() {
    var that = this;
    var uuid = wx.getStorageSync('uuid');
    if(!uuid){
      wx.navigateTo({
        url: '/pages/login/login',
        success: function(res){
          // success
          console.log('成功跳转到登录页!')
        },
        fail: function() {
          // fail
          console.log('跳转到登录页失败!')
        }
      })
      return
    }
    wx.checkSession({
      success: function(){
        // 存在登录态
        that.getuserinfo;
        console.log('存在登录态')
        wx.switchTab({
          url: '/pages/ground/ground',
        })
      },
      fail: function(){
        // 不存在登录态，去登录
        wx.navigateTo({
          url: '/pages/login/login',
          success: function(res){
            // success
            console.log('成功跳转到登录页!')
          },
          fail: function() {
            // fail
            console.log('跳转到登录页失败!')
          }
        })
        // that.onLogin();
      },
    })
  }

})