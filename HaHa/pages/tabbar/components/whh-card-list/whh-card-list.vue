<template>
	<view class="">
		<view class="viewcardlist">
			<whh-card-list v-for="(item,index) in list" :key="index" :url="item.url" @gotourl="cardlistFun($event,index)" :cardListTitle="item.title">
				<view class="imagebox"><i class="WHH" :class="item.icon"></i></view>
			</whh-card-list>
		</view>
	</view>
</template>

<script>
	import whhCardList from '../../../../components/whh-card-list/whh-card-list.vue'
	export default {
		data() {
			return {
				list:[
					{icon:'iconsvg-',title:'赞赏支持',url:''},
					{icon:'iconshouye',title:'返回首页',url:''},
					{icon:'iconsearch',title:'搜索',url:''},
					{icon:'iconsaoma',title:'扫一扫',url:''},
					{icon:'iconyonghu',title:'个人中心',url:''}
					]
			}
		},
		onLoad() {
			
		},
		components:{
			whhCardList
		},
		methods:{
			cardlistFun:function(e,i){
				console.log("e: " , e);
				console.log("i: " , i);
			}
		}
	}
</script>

<style lang="scss">
/***** 项目字体图标引入 *****/
@font-face {font-family: "WHH";
  src: url('http://at.alicdn.com/t/font_1564826_sg0khhpkjkb.eot?t=1577168119652'); /* IE9 */
  src: url('http://at.alicdn.com/t/font_1564826_sg0khhpkjkb.eot?t=1577168119652#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('http://at.alicdn.com/t/font_1564826_sg0khhpkjkb.woff?t=1577168119652') format('woff'),
  url('http://at.alicdn.com/t/font_1564826_sg0khhpkjkb.ttf?t=1577168119652') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('http://at.alicdn.com/t/font_1564826_sg0khhpkjkb.svg?t=1577168119652#WHH') format('svg'); /* iOS 4.1- */
}

.WHH {
  font-family: "WHH" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconsearch:before {
  content: "\e628";
  color: #607B8B;
}

.iconshouye:before {
  content: "\e62b";
  color: #4CD964;
}

.iconyonghu:before {
  content: "\e64d";
  color: #F0AD4E;
}

.iconsaoma:before {
  content: "\e613";
  color: #007AFF;
}

.iconsvg-:before {
  content: "\e6f4";
  color: red;
}

/***** 项目字体图标引入 *****/
	.imagebox{
		margin-left: 30upx;
	}
	.viewcardlist{
		margin: 0 auto;
		margin-top: 15upx;
		border-radius: 10upx;
		background: white;
		width: 95%;
		padding-bottom: 20upx;
		
	}
</style>
