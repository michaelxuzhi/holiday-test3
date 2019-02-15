Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:4,
    array:[{
      message:"foo"
    },{
      message:"bar"
    }]
  },

  onChange(event) {
    this.setData({
      value: event.detail
    });
  },
  // fetchDetail:function (id){
  //   var that = this;
  //   wx.request({
  //     url: 'http://m.hzyaoyi.cn/wx/guanyu_info.asp',
  //     data:{id:id},
  //     success:function(res){
  //       that.setData({
  //         detail:res.data[0]
  //       })
  //       setTimeout(function(){
  //        that.setData({
  //           hidden:true
  //         })
  //       },300)
  //     }
  //   })
  // },

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
    // this.setData({
    //   hidden: false
    // })
    // this.fetchDetail()
    console.log("123")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("456")
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