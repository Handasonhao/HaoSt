<template>
	<view class="outview">
		<view :class="{'searchview':searchimg}">
			<input type="text" class="searchinput" v-model="yourResult" @blur="fadeout" @input="getinput" placeholder="输入搜索关键词"/>
			<view v-show="searchimg" class="searchicon" @click="search" >
				<i class="icon iconfont icon-sousuo" ></i>
			</view>
		</view>
		<view v-show="isFuzzy" class="fuzzyContent" :class="{'fuzzyContent1':isFuzzy1,'fuzzyContent2':isFuzzy2}" :style="{marginLeft:toLeft}" > 
			<view class="fuzzyList" v-for="(item,index) in searchFuzzyList" :key="index">
				<view class="fuzzyItem" :class="{'fuzzyItem1':index%2 == 0}" @click="getYourResult(item)" >{{item}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import'../../static/icon/iconfont.css';  //font icon使用方法
	export default {
		name:'whhFuzzySearch',
		data() {
			return {
				title: 'Hello',
				isFuzzy:false,
				isFuzzy1:false,
				isFuzzy2:false,
				fuzzyListData:this.searchData,
				toLeft:'',
				// searchFuzzyList:[],
				yourResult:'',
				cursorValue:1
			}
		},
		onLoad() {

		},
		computed:{
			searchFuzzyList:function(){
				var result = this.yourResult;
				if(result){
					var resarr = this.searchData.filter(function(item){
						return item.indexOf(result) != -1;
					})
					if(resarr.length > 7){
						resarr.slice(0,6);
					}
					return resarr;
				}
			}
		},
		methods: {
			getinput:function(e){
				this.isFuzzy = false;
				var inputValue = e.detail.value;
				this.isFuzzy1 = false;
				this.isFuzzy2 = true;
				this.toLeft = '25px';
				// this.searchFuzzyList = [];
				// for(let i=0 ; i<inputValue.length ; i++){
				// 	var searchValue = inputValue[i];
				// 	this.searchFuzzyList = this.getFuzyyResult(this.searchFuzzyList,this.fuzzyListData,searchValue); /* 此处为另外一种模糊搜索方式，搜索模式：只要用户输入里出现相关字段就可以在模糊列表里检索*/
				// }
				console.log("this.searchFuzzyList: " ,typeof(this.searchFuzzyList));
				if(typeof(this.searchFuzzyList) != 'undefined' && this.searchFuzzyList.length>6){
					this.searchFuzzyList.slice(0,5);
				}
				if(typeof(this.searchFuzzyList) != 'undefined' && this.searchFuzzyList.length){
					this.isFuzzy = true;
				}
			},
			fadeout:function(){
				this.isFuzzy = false;
				var data = {};
				data = {
					searchValue:this.yourResult
				}
				this.$emit('search',data);
			},
			getFuzyyResult:function(searchList,data,isIt){
				var result = searchList;
				for(let j=0 ; j<data.length ; j++){
					if(result.every((val)=>{return val != data[j]})){
						for(let i=0 ; i<data[j].length ; i++){
							if(data[j][i] == isIt ){
								result.push(data[j]);
								break;
							}
						}
					}
				}
				return result;
			},
			getYourResult:function(d){
				this.yourResult = d ;
				this.isFuzzy = false;
			},
			search:function(){
				var data = {};
				data = {
					searchValue:this.yourResult
				}
				this.$emit('search',data)
			}
		},
		props:{
			searchimg:{ /* 是否显示模糊搜索的框架以及搜索图标,默认不显示 */
				type:Boolean,
				default:false
			},
			searchData:{ /* 原始的模糊列表数据 */
				type:Array,
				default:[]
			}
		}
	}
</script>

<style lang="scss" >
	.fuzzyItem1{
		background: #CCCCCC;
	} 
	.fuzzyItem{
		height: 80upx;
		line-height: 80upx;
		text-indent: 30upx;
		font-size: 30upx;
		font-weight: 800;
	} 
	.fuzzyContent{
		display: block;
		position: fixed;
		margin-top: -25upx;
		background: #E9E9E9;
		z-index: 99;
	}
	.fuzzyContent1{
		width: 400upx;
	}
	.fuzzyContent2{
		width: 580upx;
	}

	.searchview{
		height: 80upx;
		width: 720upx;
		margin: 10upx auto ;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border: solid 2px $uni-text-color-placeholder;
		border-radius: 60upx;
		align-items: center;
	}
	.searchinput{
		padding-left: 20upx;
		padding-right: 10upx;
		text-align: center;
		width: 600upx;
		height: 60upx;
		margin: 10upx auto;
		border: solid 0px white;
		border-right: solid 2px $uni-text-color-placeholder;
	}
	.searchicon{
		width: 60upx;
	} 
	.icon{
		font-size: 54upx;
		color: $uni-text-color-placeholder;
	} 
	.icon:active{
		color: #007AFF;
		font-size: 49upx;
		transition: all .1s;
	}
</style>
