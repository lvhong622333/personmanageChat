import URLPARAM from '../../utils/url';
import requestUtils from '../../utils/requestUtils';

Page({
    /**
     * 页面的初始数据
     */
    data: {
        date: "",
        desc: "",
        amount: "",
        type_desc: "",
        type_name: "",
        add_or_update: true,
        billno: "",
        stype_desc: "",
        type_code: "",
        id: "",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.setData({
          title: options.title,
          billno: options.billno
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
            this.requestUtil(this,URLPARAM.queryBuChargeUp,{
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
      clearData: function(){
            this.setData({
                amount: "",
                desc: "",
                date: "",
                type_desc: "",
                type_name: "",
                stype_desc: "",
                type_code: ""
            })
      },
      formSubmit: function(){
        this.requestUtil(this,URLPARAM.saveBuChargeUp,{
            accountMoney: this.data.amount,
            accountDesc: this.data.desc,
            accountDate: new Date(this.data.date.replace(/-/g,"/")) ,
            accountType: this.data.type_name,
            typeCode: this.data.type_code,
            stypeDesc: this.data.stype_desc
        },1,false);
      },
      updatejzInfo(){
        this.requestUtil(this,URLPARAM.updateBuChargeUp,{
            accountMoney: this.data.amount,
            accountDesc: this.data.desc,
            accountDate: new Date(this.data.date.replace(/-/g,"/")) ,
            accountType: this.data.type_name,
            typeCode: this.data.type_code,
            stypeDesc: this.data.stype_desc,
            id: this.data.id
        },1,false);
      },
      deletezjzInfo(){
        this.requestUtil(this,URLPARAM.deleteBuChargeUp,{
            id: this.data.id
        },2,false);
      },
      requestUtil(_this: any, url: any, param: any,deltaParam: any,flags: boolean){
        requestUtils.post(url, param).then((res: any) => {
            if(flags){
                _this.setData({
                   date: res.accountDateStr,
                   desc: res.accountDesc,
                   amount: res.accountMoney,
                   type_name: res.accountType,
                   type_desc: res.accountTypeStr,
                   add_or_update: false,
                   billno: res.billNo,
                   stype_desc: res.stypeDesc,
                   type_code: res.typeCode,
                   id: res.id,
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