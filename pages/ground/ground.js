// pages/ground/ground.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height_new: 0,
    testList: [
      {
        id: 1,
        user_id: 1,
        avatar: '../../images/ground/love_active.png',
        nickName: 'aaa',
        create_time: '10-10-22',
        text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        imgList: [
          "http://123.57.242.170:8000/media/image/1/a.jpg",
          "http://123.57.242.170:8000/media/image/1/b.jpg",
          "http://123.57.242.170:8000/media/image/1/c.jpg",
          "http://123.57.242.170:8000/media/image/1/d.png",
          "http://123.57.242.170:8000/media/image/1/e.jpeg",
          "http://123.57.242.170:8000/media/image/1/f.jpg",
          "http://123.57.242.170:8000/media/image/1/g.jpg",
          "http://123.57.242.170:8000/media/image/1/h.jpg",
          "http://123.57.242.170:8000/media/image/1/i.jpg",
        ],

        is_love: true,
        love: 20,
        content: 25,
        is_zk: false,
      },
      {
        id: 2,
        user_id: 2,
        avatar: '../../images/ground/love_active.png',
        nickName: 'aaa',
        create_time: '10-10-22',
        text: 'aaaaaaaaaaaaaaaaaaaaaaaaa',
        imgList: [
          "http://123.57.242.170:8000/media/image/1/a.jpg",
        ],
        love: 20,
        content: 25,
        is_zk: false,

      },
      {
        id: 3,
        user_id: 3,
        avatar: '../../images/ground/love_active.png',
        nickName: 'aaa',
        create_time: '10-10-22',
        text: 'aaaaaaaaaaaaaaaaaaaaaaaaa',
        imgList: [
          "http://123.57.242.170:8000/media/image/1/a.jpg",
          "http://123.57.242.170:8000/media/image/1/b.jpg",
        ],
        love: 20,
        content: 25,
        is_zk: false,

      },
      {
        id: 4,
        user_id: 4,
        avatar: '../../images/ground/love_active.png',
        nickName: 'aaa',
        create_time: '10-10-22',
        text: 'aaaaaaaaaaaaaaaaaaaaaaaaa',
        imgList: [
          "http://123.57.242.170:8000/media/image/1/a.jpg",
          "http://123.57.242.170:8000/media/image/1/b.jpg",
          "http://123.57.242.170:8000/media/image/1/c.jpg",
        ],
        love: 20,
        content: 25,
        is_zk: false,

      },
      {
        id: 5,
        user_id: 5,
        avatar: '../../images/ground/love_active.png',
        nickName: 'aaa',
        create_time: '10-10-22',
        text: 'aaaaaaaaaaaaaaaaaaaaaaaaa',
        imgList: [
          "http://123.57.242.170:8000/media/image/1/a.jpg",
          "http://123.57.242.170:8000/media/image/1/b.jpg",
          "http://123.57.242.170:8000/media/image/1/c.jpg",
          "http://123.57.242.170:8000/media/image/1/d.png",
        ],
        love: 20,
        content: 25,
        is_zk: false,

      },
      {
        id: 6,
        user_id: 6,
        avatar: '../../images/ground/love_active.png',
        nickName: 'aaa',
        create_time: '10-10-22',
        text: 'aaaaaaaaaaaaaaaaaaaaaaaaa',
        imgList: [],
        love: 20,
        content: 25,
        is_zk: false,

      },
      {
        id: 7,
        user_id: 7,
        avatar: '../../images/ground/love_active.png',
        nickName: 'aaa',
        create_time: '10-10-22',
        text: 'aaaaaaaaaaaaaaaaaaaaaaaaa',
        imgList: [],
        love: 20,
        content: 25,
        is_zk: false,

      }
    ],
    page: 1
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

  // 点击查看大图片
  LookPhoto: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    for (var i = 0; i < that.data.testList.length; i++) {
      var a = that.data.testList[i]
      if (a.id == id) {
        wx.previewImage({
          current: e.currentTarget.dataset.photurl,
          urls: a.imgList
        })
      }
    }
  },

  // 点击显示全文
  zk: function (e) {
    console.log(e)
    var index = e.currentTarget.dataset.index;
    var flag = e.currentTarget.dataset.zk;
    var that = this;
    that.setData({
      [`testList[${index}].is_zk`]: !flag
    })
  },

  // 点击进入用户详情页
  UserDetail: function (event) {
    console.log('userdetail')
    console.log(event.currentTarget)
  },

  // 举报用户
  ReportUser: function (event) {
    console.log('report')
  },

  // 点赞
  Love: function (event) {
    console.log(event)
    var that = this;
    var id = event.currentTarget.id;
    var user_id = event.currentTarget.dataset.userId;
    var flag = event.currentTarget.dataset.love;
    var num = event.currentTarget.dataset.num;
    console.log(id, user_id, flag, num)
    for (var i = 0; i < that.data.testList.length; i++) {
      var a = that.data.testList[i]
      if (a.id == id) {
        if (!flag) {
          var num = num + 1;
        } else {
          var num = num - 1;
        }
        console.log(num)
        that.setData({
          [`testList[${i}].is_love`]: !flag,
          [`testList[${i}].love`]: num
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
      }
    }
  },

  // 评论
  Comtent: function (event) {
    console.log('content')
    console.log(event)
    var id = event.currentTarget.id;
    var userId = event.currentTarget.dataset.userId;
    wx.navigateTo({
      url: '/pages/detail/detail'
    })
  },

  // 私聊
  chat: function (event) {
    console.log('chat')
  },

  // 无限加载数据
  loadData: function () {
    var that = this;

    // 请求下一页数据
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
    let newData = [
      {
        // id: 1,
        // user_id: 1,
        avatar: '../../images/ground/love_active.png',
        nickName: 'aaa',
        create_time: '10-10-22',
        text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        imgList: [
          "http://127.0.0.1:8000/media/image/1/a.jpg",
          "http://127.0.0.1:8000/media/image/1/b.jpg",
          "http://127.0.0.1:8000/media/image/1/c.jpg",
          "http://127.0.0.1:8000/media/image/1/d.png",
          "http://127.0.0.1:8000/media/image/1/e.jpeg",
          "http://127.0.0.1:8000/media/image/1/f.jpg",
        ],
        is_love: true,
        love: 20,
        content: 25,
        is_zk: false,
      }
    ];

    let testList = this.data.testList.concat(newData);

    this.setData({
      testList
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      complete: (res) => {
        this.setData({
          height_new: res.windowHeight - 69
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
        selected: 0
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