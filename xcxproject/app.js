App({
  onLaunch: function () {
    tt.authorize({
      scope: "scope.userInfo",
      success() {
        // 用户同意授权用户信息
        tt.login({
          force: true,
          success(res) {
            console.log(`login 调用成功${res.code} ${res.anonymousCode}`);
          },
          fail(res) {
            console.log(`login 调用失败`);
          },
        });
      },
    });
  }
})
