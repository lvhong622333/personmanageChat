import URLPARAM from '../../utils/url';
import requestUtils from '../../utils/requestUtils';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        date: "",
        color: "grey",
        color1: "grey",
        dataList: [],
        toView: "green",
        current_page: 1,
        last_page : 1,
        count: 0,
        type_desc: "",
        type_name: "",
        desc: "",
       // url: getApp().globalData.contextPath + "/buChargeUp/queryBuChargeUpList",
        stypeDesc: "",
        typeCode: "",
        accountDateStr: "",
        scrollTop: 0
    },
    bindDateChange: function (e: any) {
        this.setData({
            date: e.detail.value
        })
    },
    bindFocusChange: function () {
        this.setData({
            color: "#8080ff"
        });
    },
    bindBlurChange: function () {
        this.setData({
            color: "grey"
        });
    },
    editJzInfo(event: any){
        var billno = event.currentTarget.dataset.id;
        wx.navigateTo({
            url: '/pages/navigate/navigate?billno=' + billno  
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.setData({
            accountDateStr: options.accountDate
        })
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
        var param = { 
            currentPage: this.data.current_page,
            accountDesc: this.data.desc,
            accountType: this.data.type_name,
            typeCode: this.data.typeCode,
            accountDateStr: this.data.accountDateStr
        }
        this.requestUtil(this,param);
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
    upper(e: any) {
        console.log(e)
    },

    lower(e: any) {
        console.log(e)
    },

    scroll(e: any) {
        console.log(e)
    },

    scrollToTop() {
        this.setData({
            scrollTop: 0
        })
    },
    tap(order: any) {
        for (let i = 0; i < order.length; ++i) {
          if (order[i] === this.data.toView) {
            this.setData({
              toView: order[i + 1],
              scrollTop: (i + 1) * 200
            })
            break
          }
        }
    },
    
    tapMove() {
        this.setData({
          scrollTop: this.data.scrollTop + 10
        })
      },
     
      cleardata(){ //重置查询条件数据
           this.setData({
               type_desc: "",
               type_name: "",
               desc: "",
               date: "",
               stypeDesc: "",
               typeCode: ""
           })
      },
      queryInfo(){
        var param = { 
            currentPage: this.data.current_page,
            accountDesc: this.data.desc,
            accountType: this.data.type_name,
            typeCode: this.data.typeCode,
            accountDateStr: this.data.accountDateStr
        }
        this.requestUtil(this,param);
      },
      next_page(){
        var param = { 
            currentPage: this.data.current_page + 1,
            accountDesc: this.data.desc,
            accountType: this.data.type_name,
            accountDateStr: this.data.accountDateStr
        }
        this.requestUtil(this,param);
      },
      up_page(){
        var param = { 
            currentPage: this.data.current_page - 1,
            accountDesc: this.data.desc,
            accountType: this.data.type_name,
            accountDateStr: this.data.accountDateStr
        }
        this.requestUtil(this,param);
      },
      requestUtil(_this: any, param: any){
        requestUtils.post(URLPARAM.queryBuChargeUpList,param).then((res: any) => {
            _this.setData({
                dataList: res.list,
                last_page: res.pages,
                current_page: res.pageNum,
                count: res.total
            })
        }).catch( 
           (err: any) => {
               console.log(err);
           }
        )
      }
})