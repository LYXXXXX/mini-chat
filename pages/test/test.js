// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'',
    show: false
  },

  onChange(event){
    console.log(event.detail);
  },

  showPopup() {
    this.setData({
      show: true 
    })
  },
  onClose() {
    this.setData({
     show: false
    })
  },

  getComment(e) {
    var val = e.detail.value;
    this.setData({
      value: val
    });
  },
 
  send(event){
    console.log(event)
    var val = this.data.value;
    var that = this;
    console.log(val)
    this.setData({
      value: ''
    })
    // setTimeout(function(){
    //   that.onClose();
    // },500)
    this.onClose();
    wx.showToast({
      title: '评论成功'
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

  }
})