function post( url , param){ //表格数据提交
    return new Promise(function(resolve, reject) {
        var rs = {};
        wx.request({
            url: url, 
            header: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
            data: param,
            method: 'POST',
            success: function (res) {
                //响应数据回写
                if(res.data.code == '200'){
                    resolve(res.data.data);
                }else{
                    reject('res.data');
                    wx.showToast({   //弹出框
                        title: res.data.msg,
                        icon: 'error',
                        duration: 2000
                    });
                }
            },
            fail(err){
                reject(err);
            }  
        });
    });
}

const requestUtils = module.exports = {
    post: post
}
export default requestUtils;