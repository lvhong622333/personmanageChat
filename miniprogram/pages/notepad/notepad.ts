// pages/notepad/notepad.ts
import URLPARAM from '../../utils/url';
import requestUtils from '../../utils/requestUtils';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataList:[],
        planDate:'',
        current_page: 1,
        last_page : 1,
        count: 0
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
    cleardata(){
        this.setData({
            planDate:''
        })
    },
    requestUtil(_this: any){
        var param = {
            currentPage: _this.data.current_page,
       };
       if(_this.data.planDate != ''){
           param.planDate = new Date(_this.data.planDate.replace(/-/g,"/"));
       }
       requestUtils.post(URLPARAM.queryBuNotePad,param).then((res: any) => {
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
    queryInfo(){
        this.requestUtil(this);
    },
    createData(){
        wx.navigateTo({
            url: '/pages/notepad/notePadCreate'
        });
    },
    detailInfoQuery(event: any){
        var billNo =  event.currentTarget.dataset.id;
        wx.navigateTo({url: '/pages/notepad/notePadCreate?billNo=' + billNo});
    }
})