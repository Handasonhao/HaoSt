<template>
	<view class="content">
		<image class="titleimg mt250" src="../../static/image/logo.png"></image>
		<view class="getinbox">
			<view class="defbutton viewin" @click="login('in')">
				登陆
			</view>
			<view class="defbutton viewin" @click="login('on')">
				注册
			</view>
			<view class="defbutton viewin" @click="login('vs')">
				游客
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		onLoad() {
			
		},
		methods:{
			login:function(e){
				switch (e){
					case 'in': uni.reLaunch({
									url:'./loginin/loginin'
							   });break;
					case 'on': uni.reLaunch({
									url:'./signin/signin'
							   });break;
					case 'vs': uni.reLaunch({
									url:'../tabbar/funstyle/funstyle'
							   }) ;break;
				}
			}
		}
		
	}
</script>

<style>
	.getinbox{
		margin-top: 200upx;
	}
	.viewin{
		
	}
	.mt250{
		margin-top: 250upx;
	}
</style>
