// components/jz/jz.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {
       height: {
         type: String,
         value: ""
       },
       width: {
           type: String,
           value: ""
       },
       marginLeft: {
            type: String,
            value: ""
       },
       border: {
           type: String,
           value:"1px solid cadetblue"
       },
       type_desc: {
           type: String,
           value: ""
       },
       type_name: {
           type: String,
           value:""
       },
       marginTop:{
           type: String,
           value:""
       }
    },

    /**
     * 组件的初始数据
     */
    data: {
        type_index:0,
        type_desc_arr: ["收入","支出","全部"],
        type_name_arr: ["1","0",""],
        // type_desc: "",
        // type_name: ""
    },

    /**
     * 组件的方法列表
     */
    methods: {
        select_pop_data(e) {
            let _this = this
            let type_name = _this.data.type_name_arr[e.detail.value]
            let type_desc = _this.data.type_desc_arr[e.detail.value]
            _this.setData({
              type_name: type_name,
              type_index: e.detail.value,
              type_desc: type_desc
            });
          },
    }
})
