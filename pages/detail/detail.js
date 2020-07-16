// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    value: '',
    height_new: 0,
    dt: {
      id: 1,
      author_id: 1,
      author_avatar: '../../images/ground/love_active.png',
      author_nickName: 'aaa',
      create_time: '10-10-22',
      text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      imgList: [
        "http://123.57.242.170:8000/media/image/1/a.jpg",
        "http://123.57.242.170:8000/media/image/1/b.jpg",
        "http://123.57.242.170:8000/media/image/1/c.jpg",
        "http://123.57.242.170:8000/media/image/1/d.png",
        "http://123.57.242.170:8000/media/image/1/e.jpeg",
        "http://123.57.242.170:8000/media/image/1/f.jpg",
      ],
      is_love: true,
      love: 20,
      is_zk: false,
    },
    comment: [  // 评论列表
      {
        'id': 1, // 评论id
        'dt_id': 1, // 动态id
        'create_time': '20-02-16 12:40', // 评论时间
        'text': 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', // 评论内容
        'flag': '2', // 评论级别
        'target_comment_id': 2, // 目标评论id
        'target_name': 'sim', // 目标名字
        'target_id': '2', // 目标id
        'author': 'sam', // 评论者名字
        'author_id': '1', // 评论者id
        'author_avatar': '../../images/d.png' // 评论者头像
      },
      {
        'id': 1, // 评论id
        'dt_id': 1, // 动态id
        'create_time': '20-02-16 12:40', // 评论时间
        'text': 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', // 评论内容
        'flag': '2', // 评论级别
        'target_comment_id': 2, // 目标评论id
        'target_name': 'sim', // 目标名字
        'target_id': '2', // 目标id
        'author': 'sam', // 评论者名字
        'author_id': '1', // 评论者id
        'author_avatar': '../../images/d.png' // 评论者头像
      }
    ],
    comment_new: {} // 新评论
  },

  // 图片加载失败
  imgOnError(e) {
    console.log(e);
    var that = this;
    var idx = e.currentTarget.dataset.index;
    console.log(idx)
    var _imgUrls = this.data.dt.imgList;
    for (var i = 0; i < _imgUrls.length; i++) {
      if (i == idx) {
        that.setData({
          [`dt.imgList[${idx}]`]: '../../images/girl.jpeg'
        })
      }
    }
  },

  // 评论弹窗开启
  showPopup(e) {
    var that = this;
    var flag = e.currentTarget.dataset.flag;
    var dt_id = e.currentTarget.dataset.dt_id;
    var father_comment_id = e.currentTarget.dataset.father_comment_id;
    var target_id = e.currentTarget.dataset.target_id;

    if (flag == 1) {
      var comment_new = {
        'dt_id': dt_id,
        'flag': 1,
      }
    }

    if (flag == 2) {
      var comment_new = {
        'father_comment_id': father_comment_id,
        'dt_id': dt_id,
        'flag': 2,
        'target_id': target_id
      }
    }

    console.log(e)
    this.setData({
      show: true,
      comment_new: comment_new
    })
  },

  // 评论弹窗关闭
  onClose() {
    this.setData({
      show: false
    })
  },
  // 获取评论内容 并保存 刷新
  getComment(e) {
    this.setData({
      value: e.detail.value
    });
  },

  send(event) {
    var that = this;
    console.log(event)

    var uuid = wx.getStorageSync('uuid');  // 身份验证

    var util = require('../../utils/util'); // 创建时间调用函数

    var comment_new = that.data.comment_new;
    comment_new.text = that.data.value;  // 评论内容
    comment_new.create_time = util.formatTime(new Date()); // 创建时间
    console.log(that.data.comment_new)
    this.setData({
      value: '',
      // content: comment_new
    })
    // setTimeout(function(){
    //   that.onClose();
    // },500)
    this.onClose();
    wx.showToast({
      title: '评论成功'
    })
  },
  // 点击查看大图片
  LookPhoto: function (e) {
    var that = this;
    wx.previewImage({
      current: e.currentTarget.dataset.photurl,
      urls: that.data.dt.imgList
    })
  },

  // 
  love: function (event) {
    console.log(event)
  },
  // 点赞
  love: function (event) {
    console.log(event)
    var that = this;
    var id = event.currentTarget.dataset.id;
    var uuid = wx.getStorageSync('uuid');
    var islove = event.currentTarget.dataset.islove;
    var num = event.currentTarget.dataset.num;
    console.log(id, uuid, islove, num)

    if (!islove) {
      var num = num + 1;
    } else {
      var num = num - 1;
    }
    console.log(num)
    that.setData({
      [`dt.is_love`]: !islove,
      [`dt.love`]: num
    })

    // 数据请求 更新数据库
    // wx.request({
    //   url: 'https://URL',
    //   data: {},
    //   method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //   // header: {}, // 设置请求的 header
    //   success: function(res){
    //     // success
    //   },
    //   fail: function() {
    //     // fail
    //   },
    //   complete: function() {
    //     // complete
    //   }
    // })


  },

  // 
  chat: function (e) {
    console.log(e)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      complete: (res) => {
        this.setData({
          height_new: res.windowHeight - 55
        })
      },
    })
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

  }
})

