import Vue from 'vue'
import App from './App'

import store from "./common/store/store.js"

const msgToast = (title, duration=800, mask=false, icon='none')=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}

const msgModal = (title, content='' , showCancel=false )=>{
	let promise = new Promise((resolve,reject)=>{
		uni.showModal({
			title,
			content,
			showCancel,
			success(e) {
				let result = e.confirm ? true : false;
				resolve(result)
			}
		})
	})
	return promise;
}

const setStorage = (key , data)=>{
	uni.setStorage({
		key,
		data,
		success: () => {
			console.log('setstorage success!');
		}
	});
}

const scanCode = (onlyFromCamera = false,scanType)=>{
	let promise = new Promise((resolve,reject)=>{
		uni.scanCode({
			onlyFromCamera,
			scanType,
			success(res){
				resolve(res)
			}
		});
	});
	return promise;
}

const loading_request = function(url,method,data,token='none',title,mask){
	var header = (token =='none')? {} : {"Authorization": 'BasicAuth ' +  token} ;
	let promise = new Promise((resolve,reject)=>{
		
		if(title){
			uni.showLoading({
				title,
				mask
			});
		}
		uni.request({
			url:url,
			method:method,
			data:data,
			header:header,
			success:(res)=> {
				var data = res.data;
				data = JSON.parse(data);
				console.log(data);
				if(data.Msg == 'ok'){
					
					resolve(data.Data);
					uni.hideLoading();
				}
				else{
					reject(data.Msg);
					uni.hideLoading();
					msgModal('错误提示',data.Msg); //此处可以换作this.$MsgModal
				}
			},
			fail: () => {
				reject(data.Msg);
				uni.hideLoading();
				msgModal('请求失败','请检查网络链接或重试！');
			}
		});
	})
	return promise;
}

Vue.config.productionTip = false
Vue.prototype.$MsgToast = msgToast; //消息通知
Vue.prototype.$MsgModal = msgModal; //消息弹窗
Vue.prototype.$setStorage = setStorage; //本地缓存数据
Vue.prototype.$ScanCode = scanCode; //扫码封装
Vue.prototype.$Loading_Request = loading_request; //需要loading的请求
Vue.prototype.$Domin = "" //测试服地址
// Vue.prototype.$Domin = ""   //正式服地址

// gmyFuncton
/**
  * 方法说明 
  * @method 手动停止下拉刷新 
  * @for window
  * @function stopRefresh
  * @param {Num} duration --> 延时时间
  * @return {none}
  */
Vue.prototype.stopRefresh = function(duration){
	setTimeout(function(){
		uni.stopPullDownRefresh()
	},duration)
} 

/**
  * 方法说明 request请求
  * @method prototype.Request_Promise		
  * @for window
  * @function 利用promise封装request请求		
  * @param1 {Str} url-->网络链接 
  * @param2 {Str} method-->请求类型 
  * @param3 {Obj} data-->数据 
  * @param4 {Str} token='none'-->token密钥 
  * @return {Obj} promise对象
  */
Vue.prototype.$Request_Promise = function(url,method,data,token='none'){
	var header = (token =='none')? {} : {"Authorization": 'BasicAuth ' +  token} ;
	let promise = new Promise((resolve,reject)=>{
		uni.request({
			url:url,
			method:method,
			data:data,
			header:header,
			success:(res)=> {
				var data = res.data;
				data = JSON.parse(data);
				console.log(data);
				if(data.Msg == 'ok'){
					resolve(data.Data);
				}
				else{
					msgModal('错误提示',data.Msg); //此处可以换作this.$MsgModal	
					reject(data.Msg);
				}
			},
			fail: () => {
				msgModal('请求失败','请检查网络链接或重试！');
				reject(data.Msg);
			}
		})
	})
	return promise;
},

Vue.prototype.$store = store;

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
