<template>
	<view class="cardBox" @click="Clickevent">
		<view v-if="rawdata.imageSrc" class="imageview">
			<image  class="imageTip" :src="rawdata.imageSrc" mode="aspectFit"/>
		</view>
		<view class="textContent" :class="rawdata.buttonText?'':'nobutton'">
			<view class="title" v-if="rawdata.title">
				{{rawdata.title}}
			</view>
			<view class="tips" v-if="rawdata.tips">
				{{rawdata.tips}}
			</view>
		</view>
		<view v-if="rawdata.buttonText" class="buttonview" 
		:class="{'applyed':rawdata.statusType==0,'approved':rawdata.statusType==1,'dispatching':rawdata.statusType==2,'completed':rawdata.statusType==3,'error':rawdata.statusType==4}" 
		>{{rawdata.buttonText}}</view>
		<view class="mr20" v-else><i class="WHH iconjiantou"></i></view>
	</view>
</template>
<!-- -1表示默认颜色 0表示已申请颜色 1表示已审批颜色 2表示配送中颜色 3表示已完成颜色 4表示错误报警颜色-->
<script>
	export default{
		name:'WhhCommonList',
		data(){
			return {
				
			}
		},
		props:{
			rawdata:{        //需要的原始数据
				type:Object,
				default:function(){
					return {
						imageSrc:'../../static/noOK.png',
						buttonText:'已申请',
						title:'标题',
						tips:'',
						statusType:-1
					}
				}
			}
		},
		methods:{
			Clickevent:function(){
				var option = {
						rawdata:{
							buttonText: this.rawdata.buttonText,
							imageSrc: this.rawdata.imageSrc,
							title: this.rawdata.title,
							tips: this.rawdata.tips,
						},
						type:`${this.rawdata.tips}-${this.rawdata.title}`
				}
				this.$emit('buttonClick',option)
			}
		},
		
	}
</script>

<style lang="scss" >
/***** 项目字体图标引入 *****/
	@font-face {font-family: "WHH";
	  src: url('//at.alicdn.com/t/font_1564826_dw3var9hzsq.eot?t=1576460213916'); /* IE9 */
	  src: url('//at.alicdn.com/t/font_1564826_dw3var9hzsq.eot?t=1576460213916#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAJ8AAsAAAAABegAAAIyAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAosTAE2AiQDCAsGAAQgBYQxBzEbNwXIrjBu4QmISKstY2WHDfJpDQr+GUKIli1zu7RWhAddunB04bpFgUchFArjugXfjfiNacuPiUfn/P92zK3m6EjanZKmTCcRGoUSOGADDrJlEhpwLgEGObPvDzAPOs59nsvpTaAD/iBwuzVtjUG9gHoeSIB7YhRhJJE3jF3gEp4TqNZvoLa8d3IOXZm1LhAnUeBANxeUZZapFMprjmZxq6WyuC6egJvw+/FvFl0KZYlVs7a368PGFzuHq9LufUIIBHS6DAmzQCa2apMrGoJxDdXnm4aBLAu+KHaKvdoE++us8lrQC1PBF3etAAXc1lQVaBy1lag4Jf8y4KvF72zbv5csqt6/PmADoHRaa7xDDUHf50pPXXl3IYOP/IT+0lk/N6hc0xX8AannUNYVy1FkVaodL1TsuaNaNUqwt9n/WHPb6bIhaRvhrtCZIkkGyMwOo0yNMZRLFlFtxvx0jRaPGiJXYdoLQCh3h0K9eyTlHsjMPqJMu19tuW18h6i24+/KGuMxzLaSY+Sj+4GRJzk7M61/dXBwSkGVOhrzcNYlaRlJjtPRJJfZp5y0/47yNZiZMbJKhnsDX6M0FSxUYvJsFJoVS+Mx131o5EkGfUsUcRjiQ64PKOIROfZfNX27Dhw4RQKVlEPLEmy+RFQp6l2OpkYm9eS+Pm8buMY7pVeBGWMYYkpk0N6qi0gqJVCBF8WIx4yEI+KFJWN7FPfVj3ZvzL7fBFSzLEXYc5OKo8jJTSoA') format('woff2'),
	  url('//at.alicdn.com/t/font_1564826_dw3var9hzsq.woff?t=1576460213916') format('woff'),
	  url('//at.alicdn.com/t/font_1564826_dw3var9hzsq.ttf?t=1576460213916') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('//at.alicdn.com/t/font_1564826_dw3var9hzsq.svg?t=1576460213916#WHH') format('svg'); /* iOS 4.1- */
	}
	
	.WHH {
	  font-family: "WHH" !important;
	  font-size: 16px;
	  font-style: normal;
	  color: #666666;
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
	}
	.tips{
		height: 50upx;
		line-height: 50upx;
		font-size: 30upx;
		margin-left: 10upx;
		margin-bottom: 5upx;
		margin-top:5upx;
	}
	.buttonview{
		font-size: 30upx;
		width: 150upx;
		height: 70upx;
		line-height: 70upx;
		margin-right: 20upx;
		background: #007AFF;
		text-align: center;
		color: white;
		border-radius: 100px;
		&.applyed{
			background: #09BB07;
		}
		&.approved{
			background: #DD4A68;
		}
		&.dispatching{
			background: #007AFF;
		}
		&.completed{
			background: #6D6D72;
		}
		&.error{
			background: red;
		}
	}
</style>
