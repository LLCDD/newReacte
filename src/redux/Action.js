
var Action = {
    
    // 列子：
    // additem(text){
    //     return{
    //         type:"ADD_DOTO",
    //         text:text
    //     }
    // }
    addarr(text){
        return{
            type:"ARR_DOTO",
            text:text
        }
    },
    addarr1(text1){
        return{
            type:"ARR1_DOTO",
            text:text1
        }
    },
    addpush(text2){
        console.log(text2)
        return{
            type:"PUSH_DOTO",
            text:text2
        }
    },
    cid(i){
        return{
            type:"CID_DOTO",
            text:i
        }
    },
    // 用于试图的更新
    larr(text){
        return{
            type:"LARR_DOTO",
            text:text
        }
    },
    lary(text){
        return{
            type:"LARY_DOTO",
            text:text
        }
    },
    gx(text){
        console.log(text)
        return{
            type:"GX_DOTO",
            text:text
        }
    },
    // 李博的  action
    delItem(i){
		return{
			type:'A',
			text:i
		}
	},
    id(text){
         return{
           type:"ID",
             text:text
        }
    },
    obj(arr){
    	return {
    		type:"OBJ",
    		text:arr
    	}
    },
    id1(text){
         return{
           type:"ID1",
             text:text
        }
    },
    obj1(arr1){
    	return {
    		type:"OBJ1",
    		text:arr1
    	}
    },
    //  对  add  的保存
    Ladd(ladd){
    	return{
    		type:"ADD_LB",
    		text:ladd
    	}
    }
    ,
    Lpush(text1){
    	return{
    		type:"PUSH_LB",
    		text:text1
    	}
    },
    Hy(text2){
    	return{
    		type:"HUANY_DOTO",
    		text:text2
    	}
    }
    
}
// 在试图页面   用 Action.additem("谣传的参数")
// 在用 Store.dispatch(Action.additem("---"))  把传的参数接走到 Reducer的里面进行逻辑的处理
// 所以在viwe的组件中要  引入
// import Store from ''
// import Reducer from ""
// import Action from ''
// 注册一个  setState  <= 来 修改他的值
//  在componentDidMount 的钩子函数中  Store.subscribe(this.   --)  来对他的该变进行监听
export default Action