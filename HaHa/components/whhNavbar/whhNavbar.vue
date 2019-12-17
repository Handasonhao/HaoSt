<template>
	<view class="navbar">
		<view class="navbarbox">
			<view class="statusbox">
				<!-- 状态栏空余 -->
			</view>
			<view class="iconview">
				<view class="iconbox">
					<icon class="WHH icongongxiangtubiaozhuangtaileicaozuolei59" @click="option('back')"></icon>
					<icon class="WHH iconvertical_line"></icon>
					<icon class="WHH iconhome" @click="option('home')"></icon>
					<icon class="WHH iconsaoma" @click="option('saoma')"></icon>
					<icon class="WHH iconsousuo" @click="option('search')"></icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'whhNavbar',
		data(){
			return {
				
			}
		},
		mounted() {
			
		},
		methods:{
			option:function(e){
				switch (e){
					case 'back':console.log(e);break;
					case 'home':console.log(e);break;
					case 'saoma':console.log(e);break;
					case 'search':console.log(e);break;
					default:break;
				}
			}
		}
	}
</script>

<style lang="scss">
/***** 项目字体图标引入 *****/
	@font-face {font-family: "WHH";
	  src: url('http://at.alicdn.com/t/font_1564826_idfhp53j46.eot?t=1576484733712'); /* IE9 */
	  src: url('http://at.alicdn.com/t/font_1564826_idfhp53j46.eot?t=1576484733712#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAVgAAsAAAAACqgAAAUTAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDVgqIGIcTATYCJAMcCxAABCAFhDEHgQIbSQkjEbZ7ULKS/QW2DXtoxuJk7QYAWDBCJIrv8/gjEAcJAZAAANgBCbSBDwAAAAAInvi86lXqh5PhUuo1fJJxA3Hr/1tb/4PPQNr1DjQSRA95BI3Q6OJ1t4pF9O5SsXTvSrmhc60oQaYbVYCOt099esELXOBXkhX9UyUu+LfW8r8EvjJF94SWdVH+UZbvcrObLWpZo6oaAMffr3jTF7B+AOCbjSyKDlpakgWJi27hAzk8USwbteWAF71YjVWvq+MhQEBG8iPVa9ZvhofBrCaA9OvdszNezoBpYAme2lG2Ncgi8njWbOsmBAvDz5dPOFICC1sxJ4r0qNGNym8p++mkKGKmkzhPZwOOO4EC+QEDMkF1jELjcH6U4H4VQ30gxMPCvKV038a/LVv2i0bJMeMkxiGEQon7Bw9sHBSDYIE4QBEyo1XEgbe4Ouy70oVAU8ZBh0IZDx0GyrLQIVD2QxkWAK6/TRyQHKQmyCOMKn+4L0FxUWwkIaz4acK5pYICXdvnDzJuvBXyVBIE6F5Cg/o+/Nxydi/4s5KPcv14iOdT3u/8dlu2h4z3RBV3KS8E7ojdbo4uEfW2B5YXJI2DDj7vObpg9P5mQd/XwhDl8tGgSKFYDNcSxW5qw+kmoetDY/QigfNuI2BArTWBTjxPBWQhHBAuQb3lBBdjaoSutvDPjBMS8SaEYBue1ye7kznIBKSq6DnB4j5DT1EFAhwo/VG5WnPk/bNk4fxWo0jyLvn2ggY3nJ230tod6ZpEY2Ty9py5k41KJGFs924tevZomVSosI4EkVFOp3AGGfV8jUlIyH0J8sGTpAWV69i9+vEjDeleBkj4nOGJfh3Pn9l/7MzJvkMuVyaz9ts2yRrJMnZslkjWJocdFEw/dmwkS5Osh5WCNkUfmDRpcn+CfPAk6fk6ZJk04vv/6kEsvFo3x2w5ewLJyqpvma+wKWbxfZMfFPwuWYb4BTkZPE72C07qmuQdJdaqViavGHL8u/J9+2X15NuTddRYT4Vh5mQfCXXwJVk3ivTgHwiRnknHr3Erq/nSrn1Ydq0bbHkf9f9mic1GjVr2X24ugwdLc2kG8PjpOZplWitucYHmicd9y6ue1DQl1dq0qS7VhICAEB4g66zmcrZ6dSpXap7IjCM1r8aX4HXNC8/3wWv8+N+aP4y44m5NrtacW/OWPrP4ut76muvRN/R/806+F47v33v4qLGj6QBAdGMl1z5EM/2tHLKPel9LRmca0VF/9a/hxuu44i6+/B/v3ADwMENnPMqimUEnAf9XJZ2Ff2xhxwHzEBuja27t3SoEcJn3JwhaQCBj8If2JPF0OlWKzkEQNCc8YhYuqTFFyUQxjKyYTQw5MAelMBaQj2I7x5CMDihifCAvgy2ZkGotMIs41mGKwx6KYRzCbFJy8a/sSFR/wM54/d/nOQ/SIguPKWMB2RfonCrhzOWzt+32EWV0qY8B817RB00V9NrdXGyDFfruG4R32WcWIDyVsO55MnSOoPZkMOe2Yq7nnY7QnqidU9k4Y+ExZSyA7AvQOVXCT+Yz3ray8iPK6FJfFpLtFe+OoDtnAz3adHXKRlE1tVyiOLzLPiw2AW7QU8mq9aI2dBwmoNaXMphzGzUgWM/p0CjRVdHevKp8J2WgA3NPrliiYsQWR1zxuByBnnWeup3TFT5IquSnTj0rxyzw07eKqS/VDpvRSxcpOuBodqCoxKNAMUQ6DCmV6bHpEWKKjQY=') format('woff2'),
	  url('http://at.alicdn.com/t/font_1564826_idfhp53j46.woff?t=1576484733712') format('woff'),
	  url('http://at.alicdn.com/t/font_1564826_idfhp53j46.ttf?t=1576484733712') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('http://at.alicdn.com/t/font_1564826_idfhp53j46.svg?t=1576484733712#WHH') format('svg'); /* iOS 4.1- */
	}
	
	.WHH {
	  font-family: "WHH" !important;
	  font-size: 24px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.iconvertical_line:before {
	  content: "\e63a";
	  color: #EEEEEE;
	}
	
	.icongongxiangtubiaozhuangtaileicaozuolei59:before {
	  content: "\e66c";
	}
	
	.iconhome:before {
	  content: "\e60e";
	}
	
	.iconsousuo:before {
	  content: "\e60f";
	}
	
	.iconsaoma:before {
	  content: "\e600";
	}

/***** 项目字体图标引入 *****/
.navbarbox{
	width: 100%;
	background-color: #fff;
}
.statusbox{
	height: var(--status-bar-height);
	width: 100%;
}

.iconview{
	display: flex;
	height: 95upx;
	padding-left: 24upx;
	align-items: center;
}
.iconbox{
	height: 70upx;
	line-height: 70upx;
	letter-spacing: 20upx;
}
</style>
