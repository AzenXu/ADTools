//logs.js
const util = require('../../utils/util.js')

Page({
  data: { // 初始数据，参与页面的第一次渲染。会以JSON的形式，从逻辑层传到渲染层。数据必须符合JSON的格式：字符串、数字、布尔、对象、数组。
  // 之后，渲染层通过WXML对数据进行绑定
  //  如：<view>{{text}}</view>
    logs: []
  },
  // 
  // 生命周期函数
  // 
  onLoad: function (query) {
    console.log("页面渲染后执行，一个页面只会调用一次，可以在 onLoad 中获取打开当前页面所调用的 query 参数" + query)
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onReady: function () {
    console.log("onReady 监听页面初次渲染完成，一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互，对界面的设置如wx.setNavigationBarTitle请在onReady之后设置")
  },
  onShow: function () {
    console.log("onShow 监听页面显示")
  },
  onHide: function () {
    console.log("onHide 监听页面隐藏 当navigateTo或底部tab切换时调用")
  },
  onUnload: function () {
    console.log("onUnload 监听页面卸载 当redirectTo或navigateBack的时候调用")
  },
  // 
  // 页面相关事件处理函数
  // 
  onPullDownRefresh: function () {
  /* 
    监听用户下拉刷新事件。
    需要在app.json的window选项中或页面配置中开启enablePullDownRefresh。
    当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。
  */
    console.log("onPullDownRefresh 监听用户下拉动作")
  },
  onReachBottom: function() {
    /*
    监听用户上拉触底事件。
    可以在app.json的window选项中或页面配置中设置触发距离onReachBottomDistance。
    在触发距离内滑动期间，本事件只会被触发一次。
     */
    console.log("onReachBottom 页面上拉触底事件的处理函数")
  },
  onShareAppMessage: function() {
    /**
     * 只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮
     * 用户点击转发按钮的时候会调用
     * 此事件需要 return 一个 Object，用于自定义转发内容
     */
    console.log("onShareAppMessage 用户点击右上角转发")
    return {
      title: "自定义转发标题",
      path: "pages/logs/logs"
    }
  },
  onPageScroll: function(scrollTop) {
    console.log("onPageScroll 页面滚动触发 滚动距离： " + scrollTop)
  },
  custom_data:"这是一个自定义参数",
  custom_function: function() {
    console.log("恭喜你调用了自定义函数！并且读取了自定义参数：" + this.custom_data)
  }
})
