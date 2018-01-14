<template>
  <section class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>网站分类</h2>
          <div v-for='product in productList'>
              <h3>{{ product.title }}</h3>
              <ul>
                <li v-for='item in product.list'>
                  <a :href='item.url'>{{ item.name }}</a>
                  <span v-if='item.hot' class="hot-tag"></span>
                </li>
              </ul>
              <div v-if='!product.last' class="hr"></div>
          </div>
      </div>
      <div class="index-left-block lastest-news">
        <h2>社交网站</h2>
        <ul>
          <li v-for='item in newList'>
            <a :href="item.url"  class="new-item">
            {{ item.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <slide-show :slides="slides" :inv="1000"></slide-show>
      <div class="index-board-list">
        <div class="index-board-item"
        v-for='(item,index) in boardList' 
        :class="[{'line-last' : index%2 !== 0},
        'index-board-' +item.id]">
          <div class="index-board-item-inner" >
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="index-board-button">
              <router-link class="button" :to="{path:'detail/'+item.toKey}">立即购买</router-link>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import slideShow from '../components/slideShow'
export default {
  components: {
    slideShow
  },
  created (){
    this.$http.get('db.json',{userid:"dkdkk"})
    .then((res)=>{
      this.newList = res.data.getNewsList;
      console.log(this.newList)
    },(err) => {
      console.log(err,"error")
    })
  },
  data () {
    return {
      newList: [],
      slides: [
        {
          src: require('../assets/slideShow/pic1.jpg'),
          title: '开放产品',
          href: 'detail/analysis'
        },
        {
          src: require('../assets/slideShow/pic2.jpg'),
          title: '品牌营销',
          href: 'detail/count'
        },
        {
          src: require('../assets/slideShow/pic3.jpg'),
          title: '使命必达',
          href: 'detail/publish'
        },
        {
          src: require('../assets/slideShow/pic4.jpg'),
          title: '永攀高峰',
          href: 'detail/forecast'
        }
      ],
      boardList: [
        {
          title: '开放产品',
          description: '开放产品是一款开放产品',
          id: 'car',
          toKey: 'analysis',
          saleout: false
        },
        {
          title: '品牌营销',
          description: '品牌营销帮助你的产品更好地找到定位',
          id: 'earth',
          toKey: 'count',
          saleout: false
        },
        {
          title: '使命必达',
          description: '使命必达快速迭代永远保持最前端的速度',
          id: 'loud',
          toKey: 'forecast',
          saleout: true
        },
        {
          title: '勇攀高峰',
          description: '帮你勇闯高峰，到达事业的顶峰',
          id: 'hill',
          toKey: 'publish',
          saleout: false
        }
      ],
      productList: {
        pc: {
          title: '视频网站',
          list: [
            {
              name: '优酷',
              url: 'http://www.youku.com'
            },
            {
              name: '爱奇艺',
              url: 'http://www.iqiyi.com'
            },
            {
              name: '乐视',
              url: 'https://www.letv.com/',
              hot: true
            },
            {
              name: '腾讯视频',
              url: 'https://v.qq.com/'
            }
          ]
        },
        app: {
          title: '新闻资讯网站',
          last: true,
          list: [
            {
              name: '新浪新闻',
              url: 'http://www.sina.com.cn/'
            },
            {
              name: '搜狐新闻',
              url: 'http://news.sohu.com/',
              hot: true
            },
            {
              name: '网易新闻',
              url: 'http://news.163.com/'
            },
            {
              name: '央视新闻',
              url: 'http://news.cctv.com/'
            }
          ]
        }
      }
    }
  }
}
</script>
<style scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-car .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>