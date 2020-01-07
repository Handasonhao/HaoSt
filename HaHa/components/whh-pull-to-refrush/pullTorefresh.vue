<template>
	<div class="pull-to-refresh">
		<div class="content-box" 
		@touchstart="_touchStart" @touchmove="_touchMove" @touchend="_touchEnd" :style="{marginTop:margintop+'px'}">
			<div class="refreshing-box" v-show="loading">
				<div class="refreshing-gif" v-show="loadingPng" :animation="animationData" >
					<text class="icon iconfont icon-jiazai" ></text> <!-- 字体图标icon的使用，不懂的可以百度，或者去阿里巴巴图标网查看-->
				</div>
				<div class="refreshing-tip">
					{{tipText}}
				</div>
			</div>
			<div class="divbox">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	import'./iconfont/iconfont.css';  //font icon使用方法
	export default{
		name:'WhhPullToRefresh',
		data(){
			return{
				tipText:'下拉刷新',
				animation:'',
				animationData:{},
				loop:'',
				startX:'',
				endX:'',
				startY:'',
				endY:'',
				moveDistance:0,
				loading:false,
				loadingPng:false,
				margintop:0,
			}
		},
		created:function(){//此处可以设置动画，根据自己需求可以调整
			console.log('animation:');
			var animation = uni.createAnimation({
				duration:720,
				timingFunction: 'linear',
				transformOrigin: "50% 50%",
			});
			this.animation = animation;
			var index = 0;
			this.loop = setInterval( function(){
							index ++;
							this.animation.rotate(360*index).step();
							this.animationData = this.animation.export();
						}.bind(this), 720);
		},
		methods:{
			_touchStart:function(e){
				let touch = e.changedTouches[0];
				this.startX = touch.clientX;
				this.startY = touch.clientY;
			},
			_touchMove:function(e){
				let touch = e.changedTouches[0];
				let _move = touch.clientY - this.startY;
				if(_move > 0 && _move < 100){
					if(_move > 10){
						this.tipText = '下拉刷新';
						this.loading = true;
					}
					
					this.moveDistance = _move;//此处为组件返回时的离顶部的高度；
					if(_move > 40){
						this.tipText = '松开即可刷新'
						this.margintop = _move;//此处限制组件离顶部的最大高度；
					}
				}
			},
			_touchEnd:function(e){
				let touch = e.changedTouches[0];
				this.endX = touch.clientX;
				this.endY = touch.clientY;
				let that = this;
				if (this.moveDistance > 40) {
					this.tipText = '数据加载中...';
					this.loadingPng = true;
					//调用父组件的加载数据的方法
					//这时候要在父组件的数据加载完成后,才将组件还原,所以这里把resolve传进了父组件中
					new Promise((resolve, reject) => {
						this.$emit('load', resolve);
						}).then(() => {
							that._resetBox();
							this.tipText = '刷新成功';
						});
				} else {
					this._resetBox();
				}
			},
			_resetBox:function(){
				let that = this;
				if (this.moveDistance > 0) {
				  let timer = setInterval(function () {
					that.moveDistance -= 4;
					that.margintop = that.moveDistance;
					console.log('1px');
					if (that.margintop <= 0) {
						clearInterval(timer);
					}
				}, 1)
				}
				this.loadingPng = false;
				this.loading = false;
			}
		},
	}
</script>

<style>
	.refreshing-box{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.refreshing-tip{
		margin-left: 20upx;
	}
	.icon{
		font-size: 50upx;
	}
</style>
