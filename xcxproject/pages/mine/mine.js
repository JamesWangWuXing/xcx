const app = getApp()

Page({
  data:{
    userInfo:{}
  },
  onLoad: function () {
    console.log('个人中心')
    tt.getUserInfo({
      withCredentials: true,
      success:(res)=>{
        //console.log(`getUserInfo 调用成功 ${res.userInfo}`);
        console.log(res.userInfo);
        this.setData({
          userInfo:res.userInfo
        });
       
      },
      fail(res) {
        console.log(`getUserInfo 调用失败`);
      },
    });
  },

  goEcode:function(event){
    console.log("点击跳转到推广页面")
    tt.navigateTo({
      url: '/pages/etcode/etcode' // 指定页面的url
    });
  }

})