<template>
	<view class="cardBox" @click="Clickevent">
		<view v-if="rawdata.imageSrc" class="imageview">
			<image  class="imageTip" :src="rawdata.imageSrc" mode="aspectFit"/>
		</view>
		<view class="textContent" :class="rawdata.buttonText && rawdata.imageSrc?'':'nobutton'">
			<view class="title" v-if="rawdata.title1 || rawdata.title2">
				<span>{{rawdata.title1}}</span>
				<span>{{rawdata.title2}}</span>
			</view>
			<view class="tips" v-if="rawdata.tips1 || rawdata.tips2">
				<span>{{rawdata.tips1}}</span>
				<span>{{rawdata.tips2}}</span>
			</view>
		</view>
		<view v-if="rawdata.buttonText" class="buttonview" 
		:class="{'green':rawdata.buttonColor== 'green','wineRed':rawdata.buttonColor== 'wineRed','blue':rawdata.buttonColor== 'blue','gray':rawdata.buttonColor== 'gray','red':rawdata.buttonColor== 'red'}" 
		>{{rawdata.buttonText}}</view>
		<view class="mr20" v-else><i class="WHH iconjiantou"></i></view>
	</view>
</template>
<!-- -1表示默认颜色 0表示已申请颜色 1表示已审批颜色 2表示配送中颜色 3表示已完成颜色 4表示错误报警颜色-->
<script>
	export default{
		name:'whhCommonList',
		data(){
			return {
				
			}
		},
		props:{
			rawdata:{        //需要的原始数据
				type:Object,
				default:function(){
					return {
						imageSrc:'',
						buttonText:'',
						title1:'',
						title2:'',
						tips1:'',
						tips2:'',
						buttonColor: 'blue'
					}
				}
			},
			goUrl:{
				type:String,
				default:''
			}
		},
		methods:{
			Clickevent:function(){
				uni.navigateTo({
					url: this.goUrl
				});
			}
		},
		
	}
</script>

<style lang="scss" >
/***** 项目字体图标引入 *****/
	@font-face {font-family: "WHH";
	  src: url('http://at.alicdn.com/t/font_1564826_idfhp53j46.eot?t=1576484733712'); /* IE9 */
	  src: url('http://at.alicdn.com/t/font_1564826_idfhp53j46.eot?t=1576484733712#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAVgAAsAAAAACqgAAAUTAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDVgqIGIcTATYCJAMcCxAABCAFhDEHgQIbSQkjEbZ7ULKS/QW2DXtoxuJk7QYAWDBCJIrv8/gjEAcJAZAAANgBCbSBDwAAAAAInvi86lXqh5PhUuo1fJJxA3Hr/1tb/4PPQNr1DjQSRA95BI3Q6OJ1t4pF9O5SsXTvSrmhc60oQaYbVYCOt099esELXOBXkhX9UyUu+LfW8r8EvjJF94SWdVH+UZbvcrObLWpZo6oaAMffr3jTF7B+AOCbjSyKDlpakgWJi27hAzk8USwbteWAF71YjVWvq+MhQEBG8iPVa9ZvhofBrCaA9OvdszNezoBpYAme2lG2Ncgi8njWbOsmBAvDz5dPOFICC1sxJ4r0qNGNym8p++mkKGKmkzhPZwOOO4EC+QEDMkF1jELjcH6U4H4VQ30gxMPCvKV038a/LVv2i0bJMeMkxiGEQon7Bw9sHBSDYIE4QBEyo1XEgbe4Ouy70oVAU8ZBh0IZDx0GyrLQIVD2QxkWAK6/TRyQHKQmyCOMKn+4L0FxUWwkIaz4acK5pYICXdvnDzJuvBXyVBIE6F5Cg/o+/Nxydi/4s5KPcv14iOdT3u/8dlu2h4z3RBV3KS8E7ojdbo4uEfW2B5YXJI2DDj7vObpg9P5mQd/XwhDl8tGgSKFYDNcSxW5qw+kmoetDY/QigfNuI2BArTWBTjxPBWQhHBAuQb3lBBdjaoSutvDPjBMS8SaEYBue1ye7kznIBKSq6DnB4j5DT1EFAhwo/VG5WnPk/bNk4fxWo0jyLvn2ggY3nJ230tod6ZpEY2Ty9py5k41KJGFs924tevZomVSosI4EkVFOp3AGGfV8jUlIyH0J8sGTpAWV69i9+vEjDeleBkj4nOGJfh3Pn9l/7MzJvkMuVyaz9ts2yRrJMnZslkjWJocdFEw/dmwkS5Osh5WCNkUfmDRpcn+CfPAk6fk6ZJk04vv/6kEsvFo3x2w5ewLJyqpvma+wKWbxfZMfFPwuWYb4BTkZPE72C07qmuQdJdaqViavGHL8u/J9+2X15NuTddRYT4Vh5mQfCXXwJVk3ivTgHwiRnknHr3Erq/nSrn1Ydq0bbHkf9f9mic1GjVr2X24ugwdLc2kG8PjpOZplWitucYHmicd9y6ue1DQl1dq0qS7VhICAEB4g66zmcrZ6dSpXap7IjCM1r8aX4HXNC8/3wWv8+N+aP4y44m5NrtacW/OWPrP4ut76muvRN/R/806+F47v33v4qLGj6QBAdGMl1z5EM/2tHLKPel9LRmca0VF/9a/hxuu44i6+/B/v3ADwMENnPMqimUEnAf9XJZ2Ff2xhxwHzEBuja27t3SoEcJn3JwhaQCBj8If2JPF0OlWKzkEQNCc8YhYuqTFFyUQxjKyYTQw5MAelMBaQj2I7x5CMDihifCAvgy2ZkGotMIs41mGKwx6KYRzCbFJy8a/sSFR/wM54/d/nOQ/SIguPKWMB2RfonCrhzOWzt+32EWV0qY8B817RB00V9NrdXGyDFfruG4R32WcWIDyVsO55MnSOoPZkMOe2Yq7nnY7QnqidU9k4Y+ExZSyA7AvQOVXCT+Yz3ray8iPK6FJfFpLtFe+OoDtnAz3adHXKRlE1tVyiOLzLPiw2AW7QU8mq9aI2dBwmoNaXMphzGzUgWM/p0CjRVdHevKp8J2WgA3NPrliiYsQWR1zxuByBnnWeup3TFT5IquSnTj0rxyzw07eKqS/VDpvRSxcpOuBodqCoxKNAMUQ6DCmV6bHpEWKKjQY=') format('woff2'),
	  url('http://at.alicdn.com/t/font_1564826_idfhp53j46.woff?t=1576484733712') format('woff'),
	  url('http://at.alicdn.com/t/font_1564826_idfhp53j46.ttf?t=1576484733712') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('http://at.alicdn.com/t/font_1564826_idfhp53j46.svg?t=1576484733712#WHH') format('svg'); /* iOS 4.1- */
	}
	
	.WHH {
	  font-family: "WHH" !important;
	  font-size: 16px;
	  color: #808080;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.iconjiantou:before {
	  content: "\e607";
	}
/***** 项目字体图标引入 *****/
	.cardBox{
		width: 730upx;
		height: 100upx;
		margin: 10upx auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #FAFAFA ;
		border-radius: 10upx;
		box-shadow: 0 1px 1px #6D6D72 ;
	}
	.imageview{
		display: flex;
		align-items: center;
	}
	.imageTip{
		width: 80upx;
		height: 80upx;
		margin-left: 10upx;
	}
	.mr20{
		margin-right: 20upx;
	}
	.textContent{
		width: 400upx;
		margin-left: 20upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		// width: 300upx;
		// text-align-last: justify;//实现两端对齐，必须先定义宽度
		&.nobutton{
			width: 550upx;//条件样式的一种用法，可以继承最开始定义的元素样式，只要在该父样式下写需要改变的样式即可
			margin-left: 5upx;
		}
	}
	.title{
		height: 50upx;
		line-height: 50upx;
		font-size: 35upx;
		font-weight: bold;
		margin-left: 10upx;
		margin-bottom: 5upx;
		margin-top:5upx;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.tips{
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 50upx;
		line-height: 50upx;
		font-size: 30upx;
		margin-left: 10upx;
		margin-bottom: 5upx;
	}
	span{
		display: block;
		width: 190upx;
		text-indent: -10upx;
	}
	.buttonview{
		font-size: 30upx;
		width: 150upx;
		height: 55upx;
		line-height: 55upx;
		margin-right: 20upx;
		background: #007AFF;
		text-align: center;
		color: white;
		border-radius: 100px;
		&.green{
			background: #09BB07;
		}
		&.wineRed{
			background: #DD4A68;
		}
		&.blue{
			background: #007AFF;
		}
		&.gray{
			background: #6D6D72;
		}
		&.red{
			background: red;
		}
	}
</style>
