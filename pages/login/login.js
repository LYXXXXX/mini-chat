// pages/login/login.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {

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

  btGetUserInfo: function (e) {
    var userInfo = e.detail.userInfo;
    app.globalData.userInfo = userInfo;
    // this.onLogin();
    console.log(app.globalData.userInfo)
    this.onLogin();
  },

  // 登录函数
  onLogin: function () {
    console.log('logging1')
    var that = this;
    wx.login({
      success(res) {
        if(res.code){
          console.log(res.code)
          // 发起网络请求
          wx.request({
            url: app.globalData.baseServer + 'mini/login/',  // 将code传给后端
            data: {
              code: res.code,
              userInfo: app.globalData.userInfo
            },
            method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function(res){
              // success
              console.log(res.data.errmsg)
              wx.setStorageSync('uuid', res.data.data.user_uuid)  // 请求成功后，后端返回的唯一标识符(用户态)，存储到Storage中
              
              var pages = getCurrentPages();
              var beforePage = pages[pages.length - 2]
              wx.navigateBack({
                success: function () {
                  beforePage.onLoad();
                }
              })
            }
          })
        } else {
          console.log('登陆失败！')
        }
      }
    })
  },
})