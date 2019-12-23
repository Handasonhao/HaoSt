<template>
	<view class="content">
		<view class="starbox" v-for="item in starlist" :key='index' >
			<view class="star" :style="{top: item.top + 'px',left: item.left + 'px'}"></view>
		</view>
	</view>
</template>

<script>
	const sysInfo = uni.getSystemInfoSync();
	export default {
		name:'meteor',
		data(){
			return {
				screenWidth: sysInfo.screenWidth,
				screenHeight: sysInfo.screenHeight,
				starlist: [],
				left: 0,
				timer:''
			}
		},
		onUnload() {
			clearInterval(this.timer);
		},
		computed:{
			
		},
		mounted() {
			this.$nextTick(function(){
				console.log("sysInfo: " , sysInfo);
				this.creatstar();
			})
		},
		methods:{
			creatstar:function(){
				this.starlist = [{top:0,left:100},{top:150,left:0}];
				console.log("screenWidth: ",this.screenWidth);
				console.log("screenHeight: ",this.screenHeight);
				for(let i=0; i<8; i++){
					var top = (Math.random() - 1) * this.screenHeight * 0.5;
					var left = (Math.random() - 1) * this.screenWidth ;
					this.starlist.push({top: top,left: left});
				}
				this.movestar();
			},
			movestar:function(){
				console.log("this.starlist: " , this.starlist);
				this.timer = setInterval(()=>{
					for(let i=0; i<this.starlist.length; i++){
						this.starlist[i].top += 1;
						this.starlist[i].left += 1;
					}
					if(this.starlist[0].left > this.screenWidth + 50 ){
						clearInterval(this.timer);
						this.starlist.splice(0,1);
						var top = (Math.random() - 1) * this.screenHeight * 0.5;
						var left = (Math.random() - 1) * this.screenWidth ;
						this.starlist.push({top: top,left: left});
						this.movestar();
					}
				},10);
			},
		}
		
	}
</script>

<style lang="scss">
	body{
		background-color: black;
	}
	.star{
		position: absolute;
		top:100upx;
		left: 60upx;
		box-shadow: 2px 2px 10px #4CD964;
		&:before{
			content: '';
			border: 0.5px solid white;
			border-radius: 50% 0 0 50%;
			position: absolute;
			top: 1px;
			left: -60px;
			width: 60px;
			transform-origin: right;
			transform: rotate(45deg);
		}
	}
</style>
