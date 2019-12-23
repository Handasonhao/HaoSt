#WhhCommonList组件的使用
  
##页面使用
 <whh-navbar search title="收藏" @option="cccFun" ></whh-navbar>
 
##数据说明
* home: bollean类型,显示home图标
* saoma: bollean类型,显示扫码图标
* search: bollean类型,显示搜索图标
* title: bollean类型,自定义导航栏标题

##事件说明
* @option: 返回点击的图标事件

##完整的使用案例 

> <template>
>	<view class="content">
>		<view class="stickybox">
>			<whh-navbar search title="收藏" @option="cccFun" ></whh-navbar>
>		</view>
>	</view>
> </template>

> <script>
> 	import whhNavbar from '../../../components/whhNavbar/whhNavbar.vue';
>	export default {
>		data (){
>			return {
>				            //引入的js数据无法直接放入html中使用,需要转换一下,第一种方法,直接引入到data中
>			}
>		},
>		computed:{
>			list:function(){ 
>				return list; //第二种方法,引入计算属性进行监控数据的变化
>			}
>		},
>		onLoad() {
>		
>		},
>		components:{
>			whhNavbar
>		},
>		methods:{
>			cccFun:function(e){
>				console.log("e: " , e);
>			}
>		}
>	}
> </script>
>
> <style>
>	.stickybox{
>		position: sticky;
>		top:0;
>	}
> </style>

