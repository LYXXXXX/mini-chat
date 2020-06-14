// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    firstLoad: true
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
    //动画效果
    var animation = wx.createAnimation({
      duration: 2000,
      timingFunction: 'ease'
    });
    var animation1 = wx.createAnimation({
      duration: 2000,
      timingFunction: 'ease'
    });
    if (this.data.firstLoad) {
      setTimeout(function () {
        animation.translateY(0).opacity(1).step()
        animation1.translateY(0).opacity(1).step()
        this.setData({
          animationData: { text: animation.export(), btn: animation1.export() },
          firstLoad: false
        })
      }.bind(this), 1000)
    } else {
      animation.translateY(0).opacity(1).step()
      animation1.translateY(0).opacity(1).step()
      this.setData({
        animationData: { text: animation.export(), btn: animation1.export() },
      })
    }
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

  hide(){
    var animation = wx.createAnimation({
      duration: 2000,
      timingFunction: 'ease'
    });
    var animation1 = wx.createAnimation({
      duration: 2000,
      timingFunction: 'ease'
    });

    animation.translateY(-200).opacity(0).step()
    animation1.translateY(200).opacity(0).step()
    this.setData({
      animationData: { text: animation.export(), btn: animation1.export() },
    })
  },
  toOther(e){
    this.hide();
    setTimeout(function(){
      wx.navigateTo({
        url: e.currentTarget.dataset.src,
      })
    }.bind(this),1000);
   
  }
})