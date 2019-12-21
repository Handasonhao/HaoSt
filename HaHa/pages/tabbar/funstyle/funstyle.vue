<template>
	<view class="content">
		<view class="stickybox">
			<whhNavbar search @option="cccFun" ></whhNavbar>
		</view>
		<image class="titleimg" src="../../../static/image/logo.png"></image>
		<view class="showmsg">收集有趣的样式</view>
		<view class="listbox" v-for="(item,index) in player" :key="index">
			<whh-common-list @listClick="ClickFun($event,index)" :rawdata="testData"></whh-common-list>
		</view>
	</view>
</template>

<script>
	import whhCommonList from '../../../components/whh-list/whh-list.vue';
	import whhNavbar from '../../../components/whhNavbar/whhNavbar.vue';
	export default {
		data (){
			return {
				player:[1,2,3,4,5,6,7,8,9,10,11,12],
				testData:{
					imageSrc:'', //图片地址
					buttonText:'',//按钮信息
					title1:'', //主标题
					title2:'',//副标题
					tips1:'哦豁',
					tips2:'',
					buttonColor: 'blue' //按钮类型,-1表示默认颜色 0表示已申请颜色 1表示已审批颜色 2表示配送中颜色 3表示已完成颜色 4表示错误报警颜色
				}
			}
		},
		onLoad() {
			
		},
		components:{
			whhCommonList,
			whhNavbar
		},
		methods:{
			ClickFun:function(e,i){
				console.log("e" , e);
				console.log("i: " , i);
			},
			cccFun:function(e){
				console.log("e: " , e);
			}
		}
	}
</script>

<style>
.stickybox{
	position: sticky;
	top: 0;
}
</style>
