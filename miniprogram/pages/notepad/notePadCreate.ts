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
    formSubmit: function(){
        var params = {
            planDate:  new Date(this.data.planDate.replace(/-/g,"/")) ,
            noteDesc: this.data.noteDesc,
        };
        if(this.data.actualDate != ''){
            params.actulDate = new Date(this.data.actualDate.replace(/-/g,"/"))
        }
        this.requestUtil(this,URLPARAM.buNotePadAdd,params,1,false);
      },
      requestUtil(_this: any, url: any, param: any,deltaParam: any,flags: boolean){
        requestUtils.post(url, param).then((res: any) => {
            if(flags){
               
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