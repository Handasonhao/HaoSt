#WhhCommonList组件的使用
  
##页面使用

```
 <whh-common-list :goUrl="item.url" :rawdata="item.rdata"></whh-common-list>
 ```
 
##数据说明
* rawdata:{
*	imageSrc:'', //图片地址,
	buttonText:'呀',//按钮信息
	title1:'哈哈哈哈', //主标题
	title2:'',//副标题
	tips1:'哦豁',//主备注
	tips2:'哦哦',//副备注
	buttonColor: 'blue' //按钮颜色 , green, wineRed, blue, gray, red
* }
* goUrl: '点击列表项的跳转链接'

##事件说明
* 暂无事件函数

##完整的使用案例

```
<template>
	<view class="content">
		<view class="listbox" v-for="(item,index) in player" :key="index">
			<whh-common-list :goUrl="item.url" :rawdata="item.rdata"></whh-common-list>
		</view>
	</view>
</template>

<script>
	import whhCommonList from '../../../components/whh-list/whh-list.vue';
	export default {
		data (){
			return {
				player:[1,2,3,4,5,6,7,8,9,10,11,12],
				testData:{
					imageSrc:'',
					buttonText:'呀',
					title1:'哈哈哈哈',
					title2:'',
					tips1:'哦豁',
					tips2:'哦哦',
					buttonColor: 'blue' 
				}
			}
		},
		onLoad() {
			
		},
		components:{
			whhCommonList,
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
```