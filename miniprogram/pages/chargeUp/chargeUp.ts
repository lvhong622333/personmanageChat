import URLPARAM from '../../utils/url';
import requestUtils from '../../utils/requestUtils';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataList:[
        ],
        current_page: 1,
        last_page : 1,
        count: 0,
        date: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
       
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.requestUtil(this);
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    upper(){
        console.log("顶部触发")
    },
    lower(){
        console.log("底部触发");
    },
    scroll(){
       // console.log("滚动时触发");
    },
    queryInfo(){
        this.requestUtil(this);
    },
    requestUtil(_this: any){
        var param = {
            currentPage: _this.data.current_page,
            accountDate: _this.data.date
       };
       requestUtils.post(URLPARAM.queryBuChargeUpGroupByList,param).then((res: any) => {
           _this.setData({
                dataList: res.list,
                last_page: res.pages,
                current_page: res.pageNum,
                count: res.total
           });
       }).catch( 
          (err: any) => {
              console.log(err);
          }
       )
    },
    cleardata(){
        this.setData({
            date: ''
        });
    },
    detailInfoQuery(event: any){
       var accountDate =  event.currentTarget.dataset.id;
       wx.navigateTo({url: '/pages/homePage/homePage?accountDate=' + accountDate});
    },
    createNi(){
        wx.navigateTo({
          url: '/pages/navigate/navigate'
        })
    },

})