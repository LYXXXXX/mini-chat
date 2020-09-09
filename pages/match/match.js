//index.js
//获取应用实例
const app = getApp();
import { request } from '../../utils/wx-promise-request';

Page({
  data: {
    cards: [], // 卡片数据，一个包含所有卡片对象的数组
    cards_temp: [], //卡片下一页数据临时存放
    removed_cards: [],// 存放已经移除的卡片的索引数据，如果索引填充了其他卡片，需要将该索引移出
    transition: true,//是否开启过渡动画
    circling: true, // 是否列表循环
    rotate_deg: 0,// 整个滑动过程旋转角度
    slide_duration: 200,// 手指离开屏幕后滑出界面时长，单位(ms)毫秒
    show_cards: 3,// 显示几张卡片
    thershold: 60,// 松手后滑出界面阈值，单位px
    scale_ratio: 0.07,// 下层卡片收缩力度
    up_height: 40,// 下层卡片下移高度，单位rpx
    page: 1,//接收到的分页数据第几页
    flag: false,
    show: true,
    height_new: 0,
    hobbies:['篮球', 'cosplay', '二次元', '尤克里里', '颜控'],
    backcolor:['rgb(74, 241, 219)', 'pink', 'greenyellow'],
    topNum:0,
  },
  onLoad: function () {
    let that = this;
    wx.getSystemInfo({
      complete: (res) => {
        that.setData({
          height_new: res.windowHeight-40
        })
      },
    });

    wx.request({
      url: 'http://123.57.242.170:8000/image/getimage/',
      data:{
        page: this.data.page
      },
      header: {
        'content-type': 'application/json'
      },
      success (res) {
        // console.log(res)
        that.setData({
          cards_temp: res.data
        })
        that.generateCards(5)
      }
    })
  },
  generateCards(num) {
    const cards = []
    for (let i = 0; i < num; i++) {
      cards.push({
        name: `卡片${i + 1}`,
        // src: `https://source.unsplash.com/collection/190727/500x600?id=${i}`,
        src: this.data.cards_temp[i],
        desc: `这是一段卡片${i + 1}的描述。`,
        city:'北京',
        sex:0,
        age:18,
        pic: [
          this.data.cards_temp[i],
          this.data.cards_temp[1],
          this.data.cards_temp[2],
          this.data.cards_temp[3],
          this.data.cards_temp[4],
        ]
      })
    }
    this.setData({
      cards: cards,
      current_cursor: cards.findIndex(item => item),
      removed_cards: []
    })
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
    
  onSwitch: function (e) {
    const { symbol } = e.currentTarget.dataset
    switch (symbol) {
      case 'loop':
        this.setData({
          circling: e.detail.value
        })
        break
      case 'transition':
        this.setData({
          transition: e.detail.value
        })
        break
    }
  },
  onSlide: function (e) {
    const { symbol } = e.currentTarget.dataset
    switch (symbol) {
      case 'show_cards':
      case 'rotate_deg':
      case 'slide_duration':
        this.setData({
          [symbol]: e.detail.value
        })
        break
    }
  },
  cardOperate(e) {
    const { symbol } = e.currentTarget.dataset
    const { cards } = this.data
    switch (symbol) {
      case 'add':
        this.setData({
          [`cards[${cards.length}]`]: {
            title: `新增卡片${cards.length + 1}`,
            src: `https://source.unsplash.com/collection/190727/600x600?id=${cards.length + 1}`,
            desc: `这是一段新增卡片${cards.length + 1}的描述。`
          }
        })
        break
      case 'reset':
        this.setData({
          cards: null
        }, () => {
          this.generateCards(5)
        })
        break
      case 'remove':
        const { removeIndex } = e.currentTarget.dataset
        const { removed_cards } = this.data
        if (removed_cards.includes(parseInt(removeIndex))) return
        removed_cards.push(parseInt(removeIndex))
        this.setData({
          [`cards[${removeIndex}]`]: null,
          removed_cards
        })
        break
    }
  },
  cardSwipe(e) {
    let that = this;
    let index = e.detail.swiped_card_index;
    let page = this.data.page
    let length = this.data.cards.length
    //当第一张卡片滑动，就获取后台下一页的内容

    if (length>5 && page != 0) {
      that.setData({
        page:0,
        circling:false  
      })
    }

    if (page==0 && index+1==length) {
      that.setData({
        flag:true
      })
    }

    if(page!=0){
      if(index==0){
          that.cardGet(page+1)
      }
    }

    if(!(index==1&&page==1)){
      that.cardInstead(index)
    }
    this.showCardsInfo(e.detail)
    console.log(this.data.cards[index])
    
  },
  //获取卡片内容
  cardGet(page){
    let that = this;
    request({
      url: 'http://123.57.242.170:8000/image/getimage/',
      data: {
        page: page
      },
      header: {
        'content-type': 'application/json'
      },
    })
    .then(res => {
      that.setData({
        cards_temp:res.data,
        page: page
      })
    })
  },
  // 替换划过的卡片
  cardInstead(index){
    // console.log('1:',index)
    if(index==0){
      var index = 4
    }else{
      var index = index - 1
      // console.log(index)
    }
    let temp = this.data.cards_temp[index];
    let num = this.data.cards_temp.length-1
    let that = this
    // console.log(temp)

    let mSrc = 'cards['+ index +'].src';
    let mTitle = 'cards['+ index +'].name'
    if(index<4){
      that.setData({
        [mSrc] : temp,
      })
    }else{
      for(let i=4; i<=num; i++){
        if(i==4){
          that.setData({
            [`cards[${i}].src`] : temp
          })
        }else{
          that.setData({
            [`cards[${i}]`]: {
              name: `卡片${i+1}`,
              src: this.data.cards_temp[i],
              desc: `这是一段新增卡片${i+1}的描述。`,
              sex:0,
              city:'天津',
              age:20,
              pic: [
                this.data.cards_temp[i],
                this.data.cards_temp[1],
                this.data.cards_temp[2],
                this.data.cards_temp[3],
                this.data.cards_temp[4],
              ]
            }
          })
        }
      }
    }
  },

  //展示滑动卡片方向和信息
  showCardsInfo(e){
    const { direction, swiped_card_index, current_cursor } = e
    wx.showToast({
      title: direction === 'left' ? '我很喜欢' : '再考虑一下',
      icon: 'none',
      duration: 1000
    })
    this.setData({
      current_cursor
    })
  },

  aaaa(event){
    
    var index = this.data.current_cursor;
    var card_detail = this.data.cards[index]
    console.log(card_detail)
    this.setData({
      show:true,
      card_detail
    })
  },

  onClose(){
    
    this.setData({
      show:false,
      topNum:0
    })
  },

  onShow: function(){
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  }
})
