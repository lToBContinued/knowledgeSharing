const InnerAudioContext = wx.createInnerAudioContext() // 创建一个播放器实例

// 将秒数转化为 “ 00：00 ” 的分秒形式
function transTime(seconds) {
	const roundedSeconds = Math.round(seconds);
	const minutes = Math.floor(roundedSeconds / 60);
	const remainingSeconds = roundedSeconds % 60;
	return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
}

// 更新当前播放歌曲的信息
function renewMusicInfo(th, num) {
	const that = th
	// 设置当前播放歌曲的信息
	that.setData({
		// 更新当前播放歌曲的信息
		'playMsg.title': `${th.data.musicList[th.data.selectMusicGroup][num].title}`,
		'playMsg.singer': `${th.data.musicList[th.data.selectMusicGroup][num].singer}`,
		'playMsg.coverImgUrl': `${th.data.musicList[th.data.selectMusicGroup][num].coverImgUrl}`,
		state: false,
	})

	// 获取当前点击歌曲的音频文件
	InnerAudioContext.src = th.data.musicList[th.data.selectMusicGroup][num].musicUrl

	// 获取当前播放音频的总时长
	InnerAudioContext.onCanplay(() => {
		InnerAudioContext.duration // 初始化当前歌曲的总时长（单位：秒）
		setTimeout(() => {
			const duration = transTime(InnerAudioContext.duration) // 将秒数转化为 “ 分：秒 ” 的形式
			that.setData({
				'playMsg.durationSec': Math.round(InnerAudioContext.duration), // 进度条的最大值
				'playMsg.duration': duration // 更新当前播放音乐的信息
			})
			// console.log('歌曲的总时长是（秒）：', th.data.playMsg.durationSec)
			// console.log(`当前歌曲的时长是:${th.data.playMsg.duration}`)
		}, 300)
		th.data.timeId = null
	})

	// 当前播放的时间显示
	InnerAudioContext.onTimeUpdate(() => {
		// const that = th;
		const currentTime = transTime(InnerAudioContext.currentTime);
		that.setData({
			'sliderTimeInfo.currentTimeSec': Math.round(InnerAudioContext.currentTime), // 更新当前音乐播放秒数
			'sliderTimeInfo.currentTime': `${currentTime}` // 更新当前播放音乐时间
		})
	})
}

Page({
	data: {
		state: true, // 控制播放和暂停（true暂停，false播放）
		currentMusicId: 0, //当前播放的歌曲的序号
		selectMusicGroup: 0, // 选择的歌曲的分组id
		timeId: null,

		// 音乐列表
		musicList: [
			[{
				id: 0,
				coverImgUrl: 'http://wtsmartweb.hkfree.work/upload/%E5%9C%9F%E8%80%B3%E5%85%B6%E8%BF%9B%E8%A1%8C%E6%9B%B2cover.jpg',
				title: '土耳其进行曲',
				singer: '龙登杰',
				musicUrl: 'http://wtsmartweb.hkfree.work/music/%E5%8D%8A%E9%9F%B3%E9%98%B6_%E5%9C%9F%E8%80%B3%E5%85%B6%E8%BF%9B%E8%A1%8C%E6%9B%B2_%E9%BE%99%E7%99%BB%E6%9D%B0.mp3'
			}, {
				id: 1,
				coverImgUrl: 'http://wtsmartweb.hkfree.work/upload/%E8%8A%B1%E4%B9%8B%E8%88%9Ecover.jpg',
				title: '花之舞',
				singer: '居里夫人的狙击镜',
				musicUrl: 'http://wtsmartweb.hkfree.work/music/%E5%8D%8A%E9%9F%B3%E9%98%B6_%E8%8A%B1%E4%B9%8B%E8%88%9E_%E5%B1%85%E9%87%8C%E5%A4%AB%E4%BA%BA%E7%9A%84%E7%8B%99%E5%87%BB%E9%95%9C.mp3'
			}, {
				id: 2,
				coverImgUrl: 'http://wtsmartweb.hkfree.work/upload/%E6%9C%AA%E9%97%BB%E8%8A%B1%E5%90%8Dcover.jpg',
				title: '未闻花名',
				singer: '希儿的小跟班',
				musicUrl: 'http://wtsmartweb.hkfree.work/music/%E5%8D%8A%E9%9F%B3%E9%98%B6_%E6%9C%AA%E9%97%BB%E8%8A%B1%E5%90%8D_%E5%B8%8C%E5%84%BF%E7%9A%84%E5%B0%8F%E8%B7%9F%E7%8F%AD.mp3'
			}],
			[{
				id: 3,
				coverImgUrl: 'http://wtsmartweb.hkfree.work/upload/%E6%A8%B1%E8%8A%B1%E6%A8%B1%E8%8A%B1%E6%83%B3%E8%A7%81%E4%BD%A0cover.jpg',
				title: '樱花樱花想见你',
				singer: '坤老猫_喵',
				musicUrl: 'http://wtsmartweb.hkfree.work/music/%E5%A4%8D%E9%9F%B3_%E6%A8%B1%E8%8A%B1%E6%A8%B1%E8%8A%B1%E6%83%B3%E8%A7%81%E4%BD%A0_%E5%9D%A4%E8%80%81%E7%8C%AB_%E5%96%B5.mp3'
			}, {
				id: 4,
				coverImgUrl: 'http://wtsmartweb.hkfree.work/upload/%E8%B4%9D%E5%8A%A0%E5%B0%94%E6%B9%96%E7%95%94cover.jpg',
				title: '贝加尔湖畔',
				singer: '笨笨口琴',
				musicUrl: 'http://wtsmartweb.hkfree.work/music/%E5%A4%8D%E9%9F%B3_%E8%B4%9D%E5%8A%A0%E5%B0%94%E6%B9%96%E7%95%94_%E7%AC%A8%E7%AC%A8%E5%8F%A3%E7%90%B4.mp3'
			}, {
				id: 5,
				coverImgUrl: 'http://wtsmartweb.hkfree.work/upload/%E8%BF%90%E5%8A%A8%E5%91%98%E8%BF%9B%E8%A1%8C%E6%9B%B2cover.jpg',
				title: '运动员进行曲',
				singer: '宇舟口琴',
				musicUrl: 'http://wtsmartweb.hkfree.work/music/%E5%A4%8D%E9%9F%B3_%E8%BF%90%E5%8A%A8%E5%91%98%E8%BF%9B%E8%A1%8C%E6%9B%B2_%E5%AE%87%E8%88%9F%E5%8F%A3%E7%90%B4.mp3'
			}],
			[{
				id: 6,
				coverImgUrl: 'http://wtsmartweb.hkfree.work/upload/beat-it-cover.jpg',
				title: 'beat it',
				singer: 'Clock口琴',
				musicUrl: 'http://wtsmartweb.hkfree.work/music/%E5%B8%83%E9%B2%81%E6%96%AF_beat%20it_Clock%E5%8F%A3%E7%90%B4.mp3'
			}, {
				id: 7,
				coverImgUrl: 'http://wtsmartweb.hkfree.work/upload/Lullaby-Of-Birdland-cover.jpg',
				title: 'Lullaby Of Birdland',
				singer: 'MarcinDyjak口琴大师',
				musicUrl: 'http://wtsmartweb.hkfree.work/music/%E5%B8%83%E9%B2%81%E6%96%AF_Lullaby%20Of%20Birdland_MarcinDyjak%E5%8F%A3%E7%90%B4%E5%A4%A7%E5%B8%88.mp3'
			}, {
				id: 8,
				coverImgUrl: 'http://wtsmartweb.hkfree.work/upload/SummerTimecover.jpg',
				title: 'Summertime',
				singer: 'MarcinDyjak口琴大师',
				musicUrl: 'http://wtsmartweb.hkfree.work/music/%E5%B8%83%E9%B2%81%E6%96%AF_Summertime_MarcinDyjak%E5%8F%A3%E7%90%B4%E5%A4%A7%E5%B8%88.mp3'
			}]
		],

		// 当前播放的歌曲信息
		playMsg: {
			coverImgUrl: 'http://wtsmartweb.hkfree.work/icons/%E9%BB%98%E8%AE%A4.png', // 初次加载页面时候的默认播放器cover
			durationSec: 0, // 歌曲总时长（单位：秒）
			duration: '00:00',
			title: '',
			singer: ''
		},

		// 进度条时间信息
		sliderTimeInfo: {
			currentTimeSec: 0, // 歌曲当前播放时长（单位：秒）
			currentTime: '00:00',
			pauseTimeSec: 0, // 隐藏页面时候歌曲暂停的时间（单位：秒）
			pauseTime: '00:00',
		}
	},

	onLoad: function (options) {
		const that = this
		// 歌曲播放完
		InnerAudioContext.onEnded(function () {
			setTimeout(() => {
				// 播放按键状态变成暂停、复位进度条、时间清零
				that.setData({
					state: true,
					'sliderTimeInfo.currentTimeSec': 0,
					'sliderTimeInfo.currentTime': '00:00'
				})
			}, 100)
		})
	},

	onHide() {
		// 用户暂时离开页面时，暂停播放
		const that = this
		that.setData({
			state: true
		})
		InnerAudioContext.pause()
	},

	onUnload() {
		// 关闭页面后，删除音乐实例
		InnerAudioContext.destroy()
	},

	// 播放选中的音乐
	playMusic: function (e) {
		// console.log(e.currentTarget.dataset.group + e.currentTarget.dataset.id);
		const that = this
		that.setData({
			selectMusicGroup: e.currentTarget.dataset.group,
			currentMusicId: e.currentTarget.dataset.id,
		})
		renewMusicInfo(this, this.data.currentMusicId)
		InnerAudioContext.play()
	},

	// 播放和暂停
	play: function () {
		const that = this
		// 如果用户直接点了播放，默认播放第一首
		if (InnerAudioContext.src === '') {
			renewMusicInfo(this, 0)
			InnerAudioContext.play()
			return
		}

		that.setData({
			state: !this.data.state // 切换播放和暂停
		})
		if (that.data.state === false) {
			InnerAudioContext.play() // 切换播放
		} else {
			InnerAudioContext.pause() // 切换暂停
		}
	},

	// 上一曲
	prev: function () {
		const that = this
		if (this.data.currentMusicId == 0) {
			wx.showToast({
				title: '已经是该分类的第一首了',
				duration: 1500,
				icon: 'none'
			})
			return
		}
		// 更新当前播放歌曲信息
		renewMusicInfo(this, this.data.currentMusicId - 1)
		// 选择完歌曲后自动播放
		setTimeout(() => {
			InnerAudioContext.play()
		}, 10)

		this.data.currentMusicId--
	},

	// 下一曲
	next: function () {
		const that = this
		if (this.data.currentMusicId == this.data.musicList[this.data.selectMusicGroup].length - 1) {
			wx.showToast({
				title: '已经是该分类的最后一首了',
				duration: 1500,
				icon: 'none'
			})
			return
		}
		// 更新当前播放歌曲信息
		renewMusicInfo(this, this.data.currentMusicId + 1)
		// 选择完歌曲后自动播放
		setTimeout(() => {
			InnerAudioContext.play()
		}, 10)
		this.data.currentMusicId++
	},

	sliderChange: function (e) {
		// 拖动进度条歌曲跳转到指定位置
		InnerAudioContext.seek(e.detail.value)
	},
});