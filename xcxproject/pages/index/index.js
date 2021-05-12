const app = getApp()

Page({
  data: {
    
  },
  onLoad: function () {
    console.log('Welcome to Mini Code')
  },
  
  goToCourseDetail: function(){
    console.log("点击跳转到详情")
    tt.navigateTo({
      url: '/pages/course/course' // 指定页面的url
    });
  }
})
