// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dt:{
      id: 1,
      user_id: 1,
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
      
      is_love:true,
      love: 20,
      
      is_zk:false,
    },
    content: [  //评论列表
      {
        'id': 1, // 评论id
        'comment_id': 1, // 动态id
        'create_time': '20-02-16 12:40', // 评论时间
        'text':'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', // 评论内容
        'flag':'2', // 评论级别
        'target_name':'sim', // 目标名字
        'target_id': '2', // 目标id
        'author': 'sam', // 评论者名字
        'author_id': '1', // 评论者id
        'author_avatar': '../../images/d.png' // 评论者头像
      },
      {'id': 1,
      'comment_id': 1,
      'create_time': '20-02-16',
      'text':'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
      'flag':'1',
      'author': 'sam',
      'author_id': '1',
      'author_avatar': '../../images/d.png'},
      {'id': 1,
      'comment_id': 1,
      'create_time': '20-02-16',
      'text':'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
      'flag':'2',
      'target_name':'sim',
      'target_id': '2',
      'author': 'sam',
      'author_id': '1',
      'author_avatar': '../../images/d.png'},
      {'id': 1,
      'comment_id': 1,
      'create_time': '20-02-16',
      'text':'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
      'flag':'2',
      'target_name':'sim',
      'target_id': '2',
      'author': 'sam',
      'author_id': '1',
      'author_avatar': '../../images/d.png'}
    ],
  },

  // 点击查看大图片
  LookPhoto: function(e) {
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

  // 
  content_Input: function (event) {
    console.log(event)
  },

  // 
  chat: function (e) {
    console.log(e)
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