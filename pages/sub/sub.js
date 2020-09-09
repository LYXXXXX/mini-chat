// pages/sub/sub.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    max: 140,
    currentWordNumber: 0,
    show: true,
    imageList: [],
    content: "",
    address: "",
    topicId: null,
    topicTitle: "选择合适的话题",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      complete: (res) => {
        that.setData({
          height_new: res.windowHeight - 40
        })
      },
    });
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
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

  bindContentInput: function (event) {
    var value = event.detail.value;
    var len = parseInt(value.length);
    console.log(len)

    // 显示输入的字数
    this.setData({
      currentWordNumber: len,
      text: value
    })

    // 最大字数限制
    if (len >= max) {
      return
    }
  },

  chooseImage: function () {
    // 选择图片并上传
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        var oldLength = parseInt(this.data.imageList.length);
        // 最多上传9张
        let totalCount = res.tempFiles.length + this.data.imageList.length;
        if (totalCount > 9) {
          wx.showToast({
            title: '图片最多选择9张',
            icon: 'none'
          });
          return
        };
        console.log(this.data.imageList.concat(res.tempFiles));
        // 本地图片在页面预览
        console.log(res.tempFiles[0].path)
        this.setData({
          imageList: this.data.imageList.concat(res.tempFiles),
          image: res.tempFiles[0].path
        });

      }
    })
  },

  removeImage: function (event) {
    // 判断是否正在上传，如果正在上传就终止，否则就删除；
    // 删除图片，终止 & 删除
    var index = event.currentTarget.dataset['index'];
    var item = event.currentTarget.dataset['item'];

    this.data.imageList.splice(index, 1);
    this.setData({
      imageList: this.data.imageList
    })

  },

  publishNews: function () {
    var that = this;
    wx.uploadFile({
      filePath: that.data.image,
      name: 'img',
      url: 'http://123.57.242.170:8000/image/uploadImage/',
      formData: {
        Param: JSON.stringify({
          top: true,
          id: 1
        })
      },
      success: function (result) {
        var data = result.data;
        var credentials = data.credentials;
      },
      fail: function (result){
        console.log(result)
      }
    });
    // wx.request({
    //   method: 'POST',
    //   url: 'http://123.57.242.170:8000/image/uploadImage/',
    //   header:{"Content-Type": "application/x-www-form-urlencoded"},
    //   data:{
    //     top: true,
    //     id: 1
    //   },
    //   success: function(res){
    //     console.log(res)
    //   },
    //   fail: function(res){
    //     console.log(res)
    //   }
    // })
  }
})