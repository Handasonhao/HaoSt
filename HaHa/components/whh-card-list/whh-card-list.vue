<template>
	<view class="whhcardlistbox" @click="gotowhere">
		<view class="itemcard">
			<slot></slot>
			<view class="cardlisttitle">{{cardListTitle}}</view>
			<view class="mr20"><i class="WHH iconarrow-right-copy-copy"></i></view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"whhCardList",
		data() {
			return {
				
			}
		},
		mounted() {
			
		},
		methods:{
			gotowhere:function(){
				uni.navigateTo({
					url: this.url
				})
				this.$emit('gotourl',this.url);
			}
		},
		props:{
			cardListTitle:{
				type:String,
				default:''
			},
			url:{
				type:String,
				default:''
			}
		}
	}
</script>

<style lang="scss">
/***** 项目字体图标引入 *****/
@font-face {font-family: "WHH";
  src: url('http://at.alicdn.com/t/font_1564826_mz5ctwfd46o.eot?t=1577170803451'); /* IE9 */
  src: url('http://at.alicdn.com/t/font_1564826_mz5ctwfd46o.eot?t=1577170803451#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('http://at.alicdn.com/t/font_1564826_mz5ctwfd46o.woff?t=1577170803451') format('woff'),
  url('http://at.alicdn.com/t/font_1564826_mz5ctwfd46o.ttf?t=1577170803451') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('http://at.alicdn.com/t/font_1564826_mz5ctwfd46o.svg?t=1577170803451#WHH') format('svg'); /* iOS 4.1- */
}
	
	.WHH {
	  font-family: "WHH" !important;
	  font-size: 16px;
	  color: #808080;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.iconarrow-right-copy-copy:before {
	  content: "\e603";
	}
/***** 项目字体图标引入 *****/
	.whhcardlistbox{
		width: 95%;
		margin: 0 auto;
		background: white;
	}
	.cardlisttitle{
		margin-left: 30upx;
	}
	.itemcard{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding-top: 20upx;
		padding-bottom: 20upx;
		border-bottom: solid 1px #EEEEEE;
	}
	.mr20{
		margin-left: auto;
		margin-right: 20upx;
	}
</style>
