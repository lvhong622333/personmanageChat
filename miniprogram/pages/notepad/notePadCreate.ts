// pages/notepad/notePadCreate.ts
import URLPARAM from '../../utils/url';
import requestUtils from '../../utils/requestUtils';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        add_or_update: true,
        billno: "",
        id: "",
        planDate: "",
        actualDate:"",
        noteDesc: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            // title: options.title,
            billno: options.billNo
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        var _this = this;
        var billno = _this.data.billno;
        if(billno !== null && billno !== undefined && billno.length > 0 ){
            //根据单据编号，去后台加载数据
            this.requestUtil(this,URLPARAM.buNotePadDetail,{
                billno: billno
            },1,true);
        }
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

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
    deleteNotePadInfo(){
        var params = {
            id: this.data.id
        }
        this.requestUtil(this,URLPARAM.deleteNotePadInfo,params,1,false);
    },
    updateBuNotePad(){
        var params = {
            planDate:  new Date(this.data.planDate.replace(/-/g,"/")) ,
            noteDesc: this.data.noteDesc,
            id: this.data.id
        };
        if(this.data.actualDate != '' && this.data.actualDate != null){
            params.actulDate = new Date(this.data.actualDate.replace(/-/g,"/"))
        }
        this.requestUtil(this,URLPARAM.updateBuNotePad,params,1,false);
    },
    formSubmit: function(){
        var params = {
            planDate:  new Date(this.data.planDate.replace(/-/g,"/")) ,
            noteDesc: this.data.noteDesc,
        };
        if(this.data.actualDate != '' && this.data.actualDate != null){
            params.actulDate = new Date(this.data.actualDate.replace(/-/g,"/"))
        }
        this.requestUtil(this,URLPARAM.buNotePadAdd,params,1,false);
      },
      requestUtil(_this: any, url: any, param: any,deltaParam: any,flags: boolean){
        requestUtils.post(url, param).then((res: any) => {
            if(flags){
                _this.setData({
                    billno: res.billNo,
                    id: res.id,
                    planDate: res.planDateStr,
                    actualDate:res.actulDateStr,
                    noteDesc: res.noteDesc,
                    add_or_update: false,
                 })
            }else{
                wx.showToast({
                    title: '成功',
                    icon: 'success', // 可选值：'success', 'loading', 或 'none'
                    duration: 3000, // 持续时间，单位为毫秒，默认值为 1500
                    complete: function() {
                        setTimeout(function(){
                            // 显示成功后的回调函数
                            wx.navigateBack({
                                delta: deltaParam
                            })
                        },2000);
                    }
                })   
            } 
        }).catch(()=>{
            wx.showToast({
                title: '执行失败',
                icon: 'none',
                duration: 3000
            })
        } 
        );
      }
})