/**
     * 判断是否是微信环境
     */
export function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase()
    if (ua.indexOf('micromessenger') > -1) {
        return true // 是微信端
    } else {
        return false
    }
}

export function isMobile () {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      return true // 手机端
    } else {
      return false // alert('PC端')
    }
  }