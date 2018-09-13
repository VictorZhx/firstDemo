// pages/practise/request/request.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    requestbtn:"发起请求",
    datalist:[]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(" -----onLoad ")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("------onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("------onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("------onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("-----onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("-------onPullDownRefresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("-------onReachBottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("------onShareAppMessage")
  },

  requestJoy:function(){
    var self = this
    var url = "http://v.juhe.cn/toutiao/index?";
    var param = {};
    param["key"] ="e8d33b12334470afa8ec6d2a1100ac7d";
    param["type"]="top";

       wx.request({
         url: url,
         data:param,
         success: function (result){
           console.log("success : ",result)
           console.log("success data : ", result.errMsg)
          //  var data = JSON.parse(result)
           self.setData({
             datalist: result.data.result.data
          })
           

         },
         fail:function(result){
           console.log("fail : "+result.data)
         }
       })
  }
})