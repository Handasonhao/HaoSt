<template>
	<view class="content">
		<view class="cropbox" @click="editphoto">
			<icon class="WHH iconzhaopianphotos11"></icon>
		</view>
	</view>
</template>

<script>
	export default {
		name:'whhCropPictureUpload',
		data() {
			return {
				
			}
		},
		mounted() {
			
		},
		methods:{
			editphoto:function(){
				// 从相册选择6张图
				uni.chooseImage({
				    count: 6,
				    sizeType: ['original', 'compressed'],
				    sourceType: ['album'],
				    success: function(res) {
				        // 预览图片
				        uni.previewImage({
				            urls: res.tempFilePaths,
				            longPressActions: {
				                itemList: ['发送给朋友', '保存图片', '收藏'],
				                success: function(data) {
				                    console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
				                },
				                fail: function(err) {
				                    console.log(err.errMsg);
				                }
				            }
				        });
				    }
				    });
			}
		},
		props:{
			
		}
	}
</script>

<style>
/* 组件字体图标引入 */
@font-face {font-family: "WHH";
  src: url('http://at.alicdn.com/t/font_1564826_u3nv5i26gq.eot?t=1577415632791'); /* IE9 */
  src: url('http://at.alicdn.com/t/font_1564826_u3nv5i26gq.eot?t=1577415632791#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('http://at.alicdn.com/t/font_1564826_u3nv5i26gq.woff?t=1577415632791') format('woff'),
  url('http://at.alicdn.com/t/font_1564826_u3nv5i26gq.ttf?t=1577415632791') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('http://at.alicdn.com/t/font_1564826_u3nv5i26gq.svg?t=1577415632791#WHH') format('svg'); /* iOS 4.1- */
}

.WHH {
  font-family: "WHH" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconjianqie:before {
  content: "\e600";
}

.iconbianji:before {
  content: "\e66f";
}

.iconzhaopianphotos11:before {
  content: "\e9dc";
  font-size: 40px;
}

.iconshangchuan:before {
  content: "\e659";
}
/* 组件字体图标引入 */
.cropbox{
	margin-top: 100px;
	text-align: center;
}
</style>
