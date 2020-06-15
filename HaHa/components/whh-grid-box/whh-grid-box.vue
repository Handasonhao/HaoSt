<template>
	<view class="">
		<view class="grid-box" v-for="(list,index) in operationData" :key="index">
			<view class="label-title">
				{{list.label}}
			</view>
			<uni-grid :column="cloumn" :hor="45" :ver="-75" :showBorder="false">
			<!-- 公用跳转 -->
				<navigator v-for="(slist,sindex) in list.gridItem" :key="sindex" :url="slist.navigatorUrl" >
					<uni-grid-item  >
						<image :src="slist.imgUrl"></image>
						<text class="text">{{slist.title}}</text>
					</uni-grid-item>
				</navigator>
			<!-- 公用跳转 -->
			</uni-grid>
		</view>
	</view>
</template>

<script>
	import uniGrid from "@/components/uni-grid/uni-grid.vue";
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue";
	export default {
		name:'WhhGridBox',
		components:{uniGrid,uniGridItem},
		data(){
			return {
				
			}
		},
		props:{
			operationData:{
				type: Array,
				default: function (){
					return [
						{
							label:'查询',
							gridItem:[
								{
									title:'设置',
									imgUrl:'/static/image/about.png',/* 采用根绝对路径 */
									navigatorUrl:'../whh-card-list/whh-card-list',/* 采用绝对路径 */
								},
								{
									title:'设置',
									imgUrl:'/static/image/aboutselect.png',/* 采用根绝对路径 */
									navigatorUrl:'../whh-card-list/whh-card-list',/* 采用绝对路径 */
								},
								{
									title:'设置',
									imgUrl:'/static/image/collect.png',/* 采用根绝对路径 */
									navigatorUrl:'../whh-card-list/whh-card-list',/* 采用绝对路径 */
								},
							]
						}
					]
				}
			},
			cloumn:{
				type:Number,/* 控制生成几列 */
				default: 4
			}
		}
		
	}
</script>

<style>
image{
	width: 100upx;
	height: 100upx;
}
.grid-box{
	background-color: #F8F6FC;
	margin: 20upx;
	border-radius: 10upx;
}
.label-title{
	padding: 20upx;
	color: #555555;
	border-bottom: solid 1px #ECECEC;
}
</style>
