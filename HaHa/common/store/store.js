import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		account:{
			name:'',
			workNum:'',
			dep:'',
			token:'',
			author:'',
		},
		logstate:false,
		applyData:[],
		
	},
	mutations:{
		log:function(state,action){
			state.logstate = action;
		},
		setAccount:function(state,obj){
			state.account = obj;
		},
		addData:function(state,data){
			state.applyData.push(data);
		},
		deleteData:function(state,index){
			Vue.set(state.applyData[index],'num',0);  /*将数据中的num值清零*/
			state.applyData.splice(index,1);/* 采用数量减为零方式自动删除 */
			console.log(state.applyData);
		},
		modifyData:function(state,...[data]){
			// state.applyData[data[0]].num = data[1];
			// state.applyData.splice(data[0],1,data[1]);
			// Vue.set(state.applyData[data[0]].num,0,data[1]);
			Vue.set(state.applyData[data[0]],'num',data[1]);
			console.log("state.applyData: " , state.applyData);
		}
	}
})

export default store

