import React from 'react'
import $ from 'jquery'
import Action from '../../redux/Action'
import Store from '../../redux/Store'
import { Button } from 'antd'
class ShouC extends React.Component{
    constructor(props){
        super(props)
        this.state={
            arr:[],
        }
    }
    componentWillMount(){
        var _this = this;
        $.ajax({
            type:"get",
            async:false,
            url:"http://127.0.0.1:8000/cha",
            success:function(data){
                // _this.setState({arr:data})
                Store.dispatch(Action.larr(data))
            }
        })
    }
    // 取消关注
    false(i,c){
        console.log(i.id)
        console.log(i.c)
        var _this=this;
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:8000/shan",
            async:false,
            data:{id:i.id},
            success:function(data){
                Store.dispatch(Action.gx(data))
                Store.dispatch(Action.lary(i.c))
                _this.setState({arr:Store.getState().larr})
            }

        })
    }
    render(){
        console.log(Store.getState().larr)
        return(
            <div >

                <h2> 关注的个数 ： {Store.getState().larr.length} </h2>
                <hr/>
                <br/>
               
                {Store.getState().larr.map((item,i)=>{
                    return(
                        <div key={i} style={{width:"80%",margin:"10px auto"}}>
                            {item.wz}
                            <br/>
                            <Button type="primary" onClick={this.false.bind(this,{id:item._id,c:i})}>取消关注</Button>
                            <hr/>
                            <br/>
                    </div>
                    )
                })}
            </div>
        )
    }
}
export default ShouC