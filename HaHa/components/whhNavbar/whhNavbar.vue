<template>
	<view class="navbar">
		<view class="navbarbox">
			<view class="statusbox" :style="{height: statusBarHeight + 'px'}"> <!-- 绑定行内样式的写法? -->
				<!-- 状态栏空余 -->
			</view>
			<view class="iconview" :style="{height: navbarHeight + 'px'}"> <!-- 绑定行内样式的写法? -->
				<view class="iconbox">
					<icon class="WHH icongongxiangtubiaozhuangtaileicaozuolei59" @click="option('back')"></icon>
					<icon class="WHH iconvertical_line"></icon>
					<icon v-show="home" class="WHH iconshouye" @click="option('home')"></icon>
					<icon v-show="saoma" class="WHH iconsaoma" @click="option('saoma')"></icon>
					<icon v-show="search" class="WHH iconsearch" @click="option('search')"></icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var sysinfo = wx.getSystemInfoSync();
	var isiOS = sysinfo.system.indexOf('iOS') > -1 ;
	var isnavbarHeight = isiOS ? 44:48;
	export default {
		name:'whhNavbar',
		data(){
			return {
				statusBarHeight: sysinfo.statusBarHeight,
				navbarHeight: isnavbarHeight
			}
		},
		props:{
			home:{
				type: Boolean,
				default: false
			},
			saoma:{
				type: Boolean,
				default: false
			},
			search:{
				type: Boolean,
				default: false
			}
		},
		methods:{
			option:function(where){
				var option = {
					to: where
				};
				this.$emit('option',option);
			}
		}
	}
</script>

<style>
/***** 项目字体图标引入 *****/
	@font-face {font-family: "WHH";
	  src: url('http://at.alicdn.com/t/font_1564826_ib9lixhv52.eot?t=1576801718617'); /* IE9 */
	  src: url('http://at.alicdn.com/t/font_1564826_ib9lixhv52.eot?t=1576801718617#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAU8AAsAAAAACaQAAATvAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDXgqGDIUTATYCJAMcCxAABCAFhDEHgQQbUwgRVaRlkH2NsTG0btGMfZNI7PUtrkkxYtgURacey8e/++Cq0Ct4AQAAAACCoh/77X0Ri4aHpI1oSRMJT1Q8JHFreAmQmC7aSc////19+7z7vpHGjGIF0Ow2ayqUIFRQbaaE4fncvb9b2ylGFPhJJAF239pvPm55E9HEI2ez8k/m2JtFPPKI9Tcs0QkAo9Z0/zn3KaJmizA+VZVMCgEVkSIMqiIKV3t3/O1d0NprP6EMgx9YwG1BIBxBBfj/x73jlvctkOc5/t+Yi8YeQJ13HuAYExd3gRdIwp5CeTaddHLl33QcAvDAghsK2dg7gwYPMk4ASjHKh47k4BsQQSwSVixlQc0QQEx3cKcAJvT39YmRiIAFAgbkpKbO9Qj2m/CSwrT+Q7q1Fa3TaYHjKmAFqABsgCor9WNg1lWBQXrvzSMeBCAGB+FUnzV5cXhxfvF6Sfkf55NWQUn/4AEHBGDgQeAA8QDftyO1uh3Am5PTvSAKKXYISiDFCkE5pNggqIQUQdCPFCwA4JRLAgBBgE9AviDCCr2fwMCBQQAyVLlEq6bZW443iYre2mOks0eitt6k1NFNw8tTUz13zetUv2y1emg0U6XqSuUKWzk7X7zwU8mf0lUFFCsDYo+sxwpkpbJdcdprE3HztbGY2ZX1ZPxCXTx2rri5c1IkFUeNn3hlnVNgbLS/ridOF3d7ZfSQpAF7r9jAjL05RfdN5gnT1pMg7V1wZHxarG1m0PCjd3wladTdM7bY3tnpkZJsbAp40iCjDM4US7raLttomLFPZyipiOnQOtnmlM7ewdjoQsnLrkFh9lFT9F1dtu4Ciyo+Yg0jf0RRiQm2j5OPNSwzvx8EZ3GHgb27om6mhH/uXt883fdl/QbgrZXmVmzsME9aATL8qEPB0WGnKNeHcQuLQo+ynZubUzu1zZ+Pq63m5i1trH32DL8ZeLesLiw86zgDdUVs3ZmZ+XP4QUv8Fc97QS8/gtMailIFn6ra//Z/Pl87J+n4Mzs126L3Zf9qXDtiz7T7F8TYdoIfibhdWlx87JL+BJyYhfqByunYb76yuRquH5Y7KGKb3sh00HnAptmZ3/7kQfVZj5sc+I9Lb92eN2k85NBsk7vx3Z87rb0x3zQ7D5wmb+j7qc+v+WtuQWrc3eM9HABmT0wZAMwAf5hIYPa5x/gD5pb7jD1g+hldXft3+w3q/l8JD/p/sYwHgNes27pOMf0GrBj4zwjQmfHnYnSssz1YROFkb6X5SATgRBIL+Co6eCAF+EuZI96nE8Y7R4LAYPBggQhmsILBEmcj2YAdMtiDAwxe4IEr39Ve6GRSIFYCIClznXEJwkEAR2kIGKEFHE9aAwGjCldIhVcAqcT/LWUc4k7CLPqMkQjuhQkpk6wnN11ubZ2gcolvLYZeF2gLQ5kYHhiKvJuYoe0+o7hRI8xSSEup2Oh5GiYJidxSGUMe0Mz5zOCgrHrSQEgpNAmz6DNGQnAvmJAyKQO5SdIWHX2CyiW+LTJy7QXe9YXpHCkMGzBUjdvkZ01Fl0gsbtQIplopuMNSuhNuLKrFZOciIa8eVMaQB+gBjnzGYN5MduUPbF6YvpNtgAe5kTMcMeJJQEISkRiKi5ZN6CdXicmwX1Gm7owvNOwCZaMH7bzVNwk2oy+pIxM/Pl1Xgb4Nteqtyd1jbeFT6teX+ziZHAA=') format('woff2'),
	  url('http://at.alicdn.com/t/font_1564826_ib9lixhv52.ttf?t=1576801718617') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('http://at.alicdn.com/t/font_1564826_ib9lixhv52.woff?t=1576801718617') format('woff'),
	  url('http://at.alicdn.com/t/font_1564826_ib9lixhv52.svg?t=1576801718617#WHH') format('svg'); /* iOS 4.1- */
	}
	.WHH {
	  font-family: "WHH" !important;
	  font-size: 24px;
	  font-style: normal;
	  font-weight: 600;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}

	.iconvertical_line:before {
	  content: "\e63a";
	  color: #C8C7CC;
	}

	.icongongxiangtubiaozhuangtaileicaozuolei59:before {
	  content: "\e66c";
	}

	.iconsearch:before {
	  content: "\e628";
	}

	.iconshouye:before {
	  content: "\e62b";
	}

	.iconsaoma:before {
	  content: "\e613";
	}

/***** 项目字体图标引入 *****/
.navbarbox{
	width: 100%;
	background-color: #fff;
}

.statusbox{
	width: 100%;
}

.iconview{
	display: flex;
	padding-left: 12px;
	align-items: center;
}
.iconbox{
	/* letter-spacing: 10px; */
}
</style>
