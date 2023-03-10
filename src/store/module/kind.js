// import qs from 'qs'
import axios from 'axios'
export default {
	namespaced : true,
	state : {
		number : 0,
		category : [],
		cate_id : '',
		name_push : [],
		pid : 0,
		spu : [],
		length : 10,
		search : '',
		pid_list : '',
		lista : '',
	},
	mutations : {
		
	},
	actions : {
		kind_list(){
			return axios.get( "/api/category" , { params : { category : "" } } )
			.then(response => {
				return response
			})
		},
		category_list(context){
			axios.get( "/api/attr" , { params : { 
				cate_id : `${context.state.cate_id}`,
				key_issku : "0",
				key_ishigh : "0"
				} } )
			.then(response => {
				context.state.category = response.data
			})
		},
		pid(context){
			axios.get( "/api/category" , { params : {
				pid : `${context.state.pid}`,
				} } )
			.then(response => {
				context.state.pid_list = response.data.data
			})
		},
		spu(context){
			axios.get( "/api/spu" , { params : {
				spu_name : `${context.state.search}`,
				spu_title : '',
				spu_status : '',
				cate_id : `${context.state.cate_id}`,
				valueList : `${context.state.lista}`,
				start : '0',
				length : `${context.state.length}`
				} } )
			.then(response => {
				context.state.spu = response.data.data
				context.state.pid_list = response.data.categoryList
			})
		},
	},
}