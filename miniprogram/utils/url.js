/**
 * 后端url访问清单 
 * @author lvhong
 * @date 2023-08-18
 */
const URLPARAM = {
    queryBuChargeUpList:  getApp().globalData.contextPath + "/buChargeUp/queryBuChargeUpList", //当天记账明细清单查询
    queryBuChargeUpGroupByList: getApp().globalData.contextPath + "buChargeUp/queryBuChargeUpGroupByList", //记账清单按天分组汇总清单查询
    queryBuChargeUp: getApp().globalData.contextPath + '/buChargeUp/queryBuChargeUp', //单条记账明细查看
    saveBuChargeUp: getApp().globalData.contextPath + '/buChargeUp/saveBuChargeUp', //记账明细创建
    updateBuChargeUp: getApp().globalData.contextPath + '/buChargeUp/updateBuChargeUp', //记账明细更新
    deleteBuChargeUp: getApp().globalData.contextPath + '/buChargeUp/deleteBuChargeUp', //记账明细删除
    queryBuNotePad: getApp().globalData.contextPath + 'buNotePad/queryBuNotePad',
    buNotePadAdd: getApp().globalData.contextPath +  'buNotePad/buNotePadAdd',
    buNotePadDetail:  getApp().globalData.contextPath +  'buNotePad/buNotePadDetail',
    updateBuNotePad: getApp().globalData.contextPath + 'buNotePad/updateBuNotePad',
    deleteNotePadInfo: getApp().globalData.contextPath + 'buNotePad/deleteNotePadInfo',
}
export default URLPARAM;