// components/jz_type/jz_type.ts
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
          stype_desc: {
              type: String,
              value: ""
          },
          type_code: {
              type: String,
              value:""
          },
          marginTop:{
              type:String,
              value:""
          }
    },

    /**
     * 组件的初始数据
     */
    data: {
        type_index:0,
        stype_desc_arr: ["餐饮","交通","娱乐","教育","育儿","礼金","其他"],
        type_code_arr: ["CATERING","TRAFFIC","RECREATION","EDUCATION","BRING_UP_CHILDREN","CASH_GIFT","OTHER"],
    },

    /**
     * 组件的方法列表
     */
    methods: {
        select_pop_data(e) {
            let _this = this
            let type_code = _this.data.type_code_arr[e.detail.value]
            let stype_desc = _this.data.stype_desc_arr[e.detail.value]
            _this.setData({
              type_code: type_code,
              stype_index: e.detail.value,
              stype_desc: stype_desc
            });
          },
    }
})
