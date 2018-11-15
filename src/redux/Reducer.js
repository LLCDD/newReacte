
var Reducer = function(state,action){
    if(typeof state === "undefined"){
        return {
            // 用户名
            username:"1",
            // 模拟的数据
            arr1:'',
            arr2:'',
            // 详情页的索引值
            index:'',
            // 更新试图
            larr:[],
// 李博的 --------------------------------------------------------
            id:"",
        	obj:"",
        	id1:"",
        	obj1:"",
        	//存的数组 
        	Larray:[],
        	//对add的保存  的个数保存
        	Ladd:0

        }
    }
    switch (action.type) {
        case "ARR_DOTO":
        //    存 模拟的数据
            state.arr1 = action.text
            // console.log(state)
          return state
        case "ARR1_DOTO":

        // 自己的后台数据
            state.arr2 = action.text
            // console.log(state)
            return state
        case "PUSH_DOTO":
            // console.log("11")
            state.arr1.push(action.text)
            console.log(state)
            return state
        case "CID_DOTO":
            state.index = action.text
            return state
        case "LARR_DOTO":
            state.larr = action.text
            return state
        case "LARY_DOTO":
            // console.log(action.text)
            // state.larr.splice(action.text,1)
            return state
        case "GX_DOTO":
            console.log(action.text)
            state.larr = action.text
            return state
//------------------------------------------ 李博的 reducer  -------------------------------------------------
            case 'A':
            console.log(action.text)
                state.Larray.splice(action.text,1);
                return state;
            case "ID":
            //      console.log(action.text)
                state.id = action.text
            return state
            case "OBJ":
                //console.log()
                state.obj = action.text
                return state
            case "ID1":
            // console.log(action.text)
                state.id1 = action.text
            return state
            case "OBJ1":
                //console.log()
                state.obj1 = action.text
                return state	
            case "HUANY_DOTO":
                state.Larray = action.text
                return state
            case "ADD_LB":
                state.Ladd = action.text
                return state
            case "PUSH_LB":
                state.Larray.push(action.text)
                return state

        default:
            return state
    }
}


export default Reducer;