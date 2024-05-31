Page({
  data: {
    shadowClass1: '',
    shadowClass2: ''
  },
  
  tapBtn: function (e) {
    if (e.currentTarget.id === '1') {
      this.setData({
        'shadowClass1': 'no-shadow'
      })
    } else {
      this.setData({
        'shadowClass2': 'no-shadow'
      })
    }
  },
  
  releaseBtn: function (e) {
    if (e.currentTarget.id === '1') {
      this.setData({
        'shadowClass1': ''
      })
      
    } else {
      this.setData({
        'shadowClass2': ''
      })
    }
  },
  
  goToBaike: function () {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  
  goToSound: function () {
    wx.switchTab({
      url: '/pages/sound/sound'
    })
  }
})
