Page({
  data: {
    // 数据列表
    swiperImgUrls: [
      'http://wtsmartweb.hkfree.work/images/swiper1.jpg',
      'http://wtsmartweb.hkfree.work/images/swiper2.jpg',
      'http://wtsmartweb.hkfree.work/images/swiper3.jpg',
      'http://wtsmartweb.hkfree.work/images/swiper4.jpg'
    ],
    
    videos: [{
      title: '初学者必看：我应该选择哪种口琴？',
      url: 'http://wtsmartweb.hkfree.work/images/swiper_video_1.mp4'
    },
      {
        title: '口琴演奏：在水一方，邓丽君的经典，我愿逆流而上　依偎在她身旁',
        url: 'https://vd3.bdstatic.com/mda-mcci4u8ffuuximpg/hd/mda-mcci4u8ffuuximpg.mp4'
      },
      {
        title: '郑州大叔吹口琴为清淤解放军鼓劲 解放军回敬军礼致谢',
        url: 'https://vd3.bdstatic.com/mda-mgs4r3dhw3qu4273/480p/h264/1627356044545758882/mda-mgs4r3dhw3qu4273.mp4'
      }
    ],
    
    fuyinList: [{
      flag: 0, //用于判断是否要渲染图片
      title: '重音口琴（Octave Harmonica）',
      content: '重音口琴与复音口琴机构相同，有着同样的簧片排列和音阶排列。不同之处在于同一个音的两个簧片音高相差一个八度。音色饱满浑厚靓丽，十分动听，并没有震音效果。适合演奏古老的民俗（folk）音乐和爱尔兰（Old Ireland）音乐。'
    }, {
      flag: 0,
      title: '小中音口琴（Bariton Harmonica）',
      content: '中音口琴即是BARITON（BR），中音口琴亦与复音口琴相仿，其音比高音口琴（即复音口琴）全部低了八度，在大合奏中它多用做伴奏和表现音色较沉重的旋律。中音口琴在大和奏时，其地位相当于管弦乐中的中提琴部份。 中音口琴是口琴家族的主要成员，它既能在合奏时使乐声溶合，又能像独奏乐器般善于表达感情。'
    }, {
      flag: 0,
      title: '回音口琴（Echo Harmonica）',
      content: '用来合奏或作为某些曲子专门独奏的复音口琴，拥有桶形的盖板使得它有一种特殊的回音效果。它的内部结构和复音口琴一样，差别在于外面的盖板，回声口琴外面的盖板很大很宽，可以底部是封住的，两端开口，这样一来只要堵住一端，然后扇动另一端就能制造出一种特殊的像回声一样的效果，音色优美独特。'
    }, {
      flag: 0,
      title: '重音回声口琴（Octave &Echo Harmonica）',
      content: '重音口琴与回声口琴的结合体，既拥有回声口琴的外形且同一个音的两个簧片音高相差一个八度的口琴。'
    }],
    
    hezouList: [{
      flag: 1,
      title: '贝司口琴(Bass or Double Bass Harmonica)',
      content: '贝司口琴比较特殊,所有的孔均为吹孔，贝司口琴主要担任乐队内低音的部分，又被称为低音口琴。贝司口琴较重，有单音簧或双音簧发声的型号。倍低音（double bass）是双簧音的那种，其上下簧片音高相差八度。类似于钢琴，上排孔相当于钢琴的黑键，下排孔相当于钢琴的白键。较一般口琴低一个或两个八度。贝司口琴的音色低沉、浑圆、厚重，负责衬托旋律和稳定乐曲的节奏及速度。是口琴社团和乐队的必备乐器，就像乐队中的节拍器一样的作用，能与和旋口琴相互配合成为一个完整的小节。',
      imgName: '低音口琴',
      imgUrl: 'http://wtsmartweb.hkfree.work/images/article_pic_9.jpg'
    }, {
      flag: 1,
      title: '和弦口琴(Chord Harmonica)',
      content: '和弦口琴是所有口琴中长度最长的种类。这种口琴的每一个孔都是有一个和弦组成。即每一个孔由若干簧片组成以形成和弦。例如，C和弦由C、E、G 组成。这类口琴用于合奏中的伴奏。这种口琴能造出独奏类口琴如何苦练技巧也无法媲美的和声效果，是口琴社团、乐队的必备之一。 但是由于不能吹奏旋律所以几乎无法用来独奏，也几乎没有以和弦口琴为主乐器的曲目，少数和弦口琴能简单的代替低音口琴的作用，能与低音口琴相互配合成为一个完整的小节。',
      imgName: '和弦口琴',
      imgUrl: 'http://wtsmartweb.hkfree.work/images/article_pic_10.jpg'
    }, {
      flag: 1,
      title: '铜角口琴（Horn Harmonica）',
      content: '从外形上铜角口琴兼具低音口琴的壮与和弦口琴的长。铜角口琴分为高音铜角（soprano horn）和中音铜角(alto horn)两种，单音簧发声，只有吹气音而没有吸气音，琴格分为两排，上排孔相当于钢琴的黑键，下排孔相当于钢琴的白键，管状的盖板与木格琴身营造出像木管或法国号似的音色，甚至有编曲者把管乐部分编给铜角口琴来吹奏，但它并不适合吹奏快速的旋律。这种口琴音色清亮而圆润，纯净而特殊，可用手做振音效果，是口琴社团、乐队的必备之一。',
      imgName: '铜角口琴',
      imgUrl: 'http://wtsmartweb.hkfree.work/images/article_pic_11.jpg'
    }, {
      flag: 1,
      title: '大中音口琴（Bariton Harmonica）',
      content: '大型中音口琴即常说的大中音口琴，它的构造分上下两格，上面一格的音比下面的一个高半度。中音口琴是复音口琴中比较特殊的琴，它比普通复音低了八度，除此之外，其余特点与普通复音口琴无异。在大合奏中较常见到。在大合奏的配置中，相当于管弦乐团的"中提琴"的地位，当然有时也有例外。中音口琴比普通复音耗气。故更需注重气的使用。中音口琴琴壳有Bariton字样，可作为辨别中音口琴与普通复音的标识，口琴合奏谱常以"Br."的缩写记之。大中音口琴音色厚重、优美，在口琴合奏中是不可缺少的一个声部，有时候也在重奏中担任重要的声部。大中音口琴是单孔发音，和半音阶口琴很合得来，而且音色浑厚，在重奏中担任第二或第三声部非常适合。在以往口琴合奏曲谱中中音声部大都是配和声，跟着重音或和弦声部走，很少给个主旋律，在口琴队中很不起眼，往往不受重视，基本上是由吹奏技巧一般或是新队员担任，这就很“委屈”大中音口琴了。 大中音口琴的鼻祖是程明德先生，他在口琴总厂担任技师时研制的。程先生大中音口琴吹得非常好，气息控制收发自如，发音洪亮，音色优美。我听过他和学生们一起演奏的“旧友进行曲”，程先生用大中音口琴吹中音声部，穿透力很强。',
      imgName: '大中音',
      imgUrl: 'http://wtsmartweb.hkfree.work/images/article_pic_12.jpg'
    }, {
      flag: 0,
      title: '笛声口琴',
      content: '笛声口琴有高音微声和中音笛声两种。这是一种大型的单音口琴，也只有吹音没有吸音。它的音色很好听。只是由于面积大，音孔距离较远，音阶大跳比较困难。',
    }, {
      flag: 0,
      title: '迷你口琴(Mini Harmonica)',
      content: '也被称作“项链口琴”，可以说这种口琴应该是所有乐器当中最小巧的一种，通常为4孔8簧片结构。由于只能吹出一个完整的八度。所以可以吹奏的曲目十分有限。国外大厂的项链口琴都做的很华丽，所以首饰价值要比实用价值大。',
    }],
    
    weihuList: [
      '吹奏口琴时不要吃东西；',
      '吹奏口琴前不要喝高粘度、高酒精度的饮料；',
      '吹奏前要漱口，最好刷牙；',
      '吹奏后要把水汽从吹孔里轻轻拍出；',
      '吹奏后要把口琴放在干燥的地方（口琴盒里）；',
      '最好不要和别人共用一把口琴；',
      '压音对簧片并没有太大损害，但是初学时错误的气息可能导致断簧；',
      '不要用力过度猛吹，以免簧片受损或变音。',
      '不要用化学挥发的试剂擦拭口琴，容易变形。',
      '吹口处不要放进异物，容易造成故障，破损。',
      '簧片折断前，音程减低幅度非常大。如有这种情况，请立刻中止使用。'
    ],
    navItems: ['历史背景', '构造', '分类', '维护'],
    
    navbarInitTop: 0, // 导航栏初始化距顶部的距离
    isFixedTop: false, // 是否固定顶部
    activeIndex: 0, // 当前选中的标签索引
    
    flag: 0
  },
  
  onLoad: function (options) {
    const that = this;
    that.setData({
      activeIndex: 0,
      flag: 0
    });
  },
  
  clickTab: function (e) {
    const that = this;
    const index = e.currentTarget.dataset.index;
    that.setData({
      activeIndex: index,
    });
  },
  
  onShow: function () {
    const that = this;
    if (that.data.navbarInitTop == 0) {
      // 创建选择器查询对象，获取导航栏节点的信息
      wx.createSelectorQuery().select('#navbar').boundingClientRect(function (rect) {
        // 如果导航栏距离上边界有距离，就获取这个距离
        if (rect && rect.top > 0) {
          let navbarInitTop = parseInt(rect.top);
          that.setData({
            navbarInitTop: navbarInitTop
          });
        }
        // console.log(that.data.navbarInitTop);
      }).exec();		// 调用exec()方法执行选择器查询
    }
  },
  
  // 监听页面滑动事件
  onPageScroll: function (e) {
    const that = this;
    const scrollTop = parseInt(e.scrollTop); // 滚动条距离顶部高度
    // console.log(scrollTop);
    // 如果页面头部卷去的高度大于等于tab栏距离顶部的高度，就固定tab栏
    const isSatisfy = scrollTop >= that.data.navbarInitTop ? true : false;
    if (that.data.isFixedTop === isSatisfy) {
      return false;
    }
    that.setData({
      isFixedTop: isSatisfy
    });
  },
})
