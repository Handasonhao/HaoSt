<template>
	<view class="content">
		<view class="stickybox">
			<whh-navbar search title="收藏" @option="cccFun" ></whh-navbar>
		</view>
		<image class="titleimg" :src="logo"></image>
		<view class="showmsg">收集相关的学习资料,以及相关的网址</view>
		<view class="listbox" v-for="(item,index) in list" :key="index">
			<whh-common-list :goUrl="item.url" :rawdata="item.rdata"></whh-common-list>
		</view>
	</view>
</template>

<script>
	import WhhCommonList from '../../../components/whh-list/whh-list.vue';
	import whhNavbar from '../../../components/whhNavbar/whhNavbar.vue';
	import tlogo from '../../../static/image/logo.png'
	import {list} from './data.js';
	export default {
		data (){
			return {
				logo: tlogo   //或者使用 require('../../../static/image/logo.png')
				             //引入的js数据无法直接放入html中使用,需要转换一下,第一种方法,直接引入到data中
			}
		},
		computed:{
			list:function(){ 
				return list; //第二种方法,引入计算属性进行监控数据的变化
			}
		},
		onLoad() {
			console.log("list: " , list);
		},
		components:{
			WhhCommonList,
			whhNavbar
		},
		methods:{
			cccFun:function(e){
				console.log("e: " , e);
			}
		}
	}
</script>

<style>
	
</style>
