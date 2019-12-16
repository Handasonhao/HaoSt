<template>
	<view class="content">
		<image class="titleimg" src="../../../static/image/listimg.png"></image>
		<view class="showmsg">个人的一些展示</view>
		<view class="listbox" v-for="(item,index) in player" :key="index">
			<WhhCommonList @buttonClick="ClickFun($event,index)" :rawdata="testData"></WhhCommonList>
		</view>
	</view>
</template>

<script>
	import WhhCommonList from '../../../components/whh-list/whh-list.vue';
	export default {
		data (){
			return {
				player:[1,2,3,4],
				testData:{
					imageSrc:'', //图片地址
					buttonText:'',//按钮信息
					title:'', //主标题
					tips:'备注',//副标题
					statusType:2//按钮类型,-1表示默认颜色 0表示已申请颜色 1表示已审批颜色 2表示配送中颜色 3表示已完成颜色 4表示错误报警颜色
				}
			}
		},
		onLoad() {
			
		},
		components:{
			WhhCommonList
		},
		methods:{
			ClickFun:function(e,i){
				console.log("e" , e);
				console.log("i: " , i);
			}
		}
	}
</script>

<style>
	
</style>
