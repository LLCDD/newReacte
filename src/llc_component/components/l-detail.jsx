import React from 'react'
import Store from '../../redux/Store'
import { Button } from 'antd';
import $ from 'jquery'

class Detail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cid:Store.getState().index,
            style:"block",
            style1:"none"
        }
    }
    click(){
        if(this.state.style == "block"){
            this.setState({style:"none"})
            this.setState({style1:"block"})
        }
        $.ajax({
            type:"get",
            async:false,
            url:"http://127.0.0.1:8000/guanzhu",
            data:{username:Store.getState().arr1[this.state.cid]['name'],wz:Store.getState().arr1[this.state.cid]['text']},
            success:function(data){
                console.log("1")
            }
        })
    }
    // 取消关注
    click1(){
        if(this.state.style1 == "block"){
            this.setState({style:"block"})
            this.setState({style1:"none"})
        }
        $.ajax({
            type:"get",
            async:false,
            url:"http://127.0.0.1:8000/remove",
            data:{username:Store.getState().arr1[this.state.cid]['name'],wz:Store.getState().arr1[this.state.cid]['text']},
            success:function(data){
                console.log(data)
            }
        })
    }
    // 收藏文章
    click2(){
        $.ajax({
            type:"get",
            async:false,
            url:"http://127.0.0.1:8000/wenzhang",
            data:{username:Store.getState().arr1[this.state.cid]['name'],wz:Store.getState().arr1[this.state.cid]['text']},
           
            success:function(data){

            }
        })
    }

    render(){
        // console.log(Store.getState())
        return(
            <div>
                <h1 style={{ textAlign:"center" }}>
                    {Store.getState().arr1[this.state.cid]['bt']}
                </h1>
                <h4>
                    作者：{Store.getState().arr1[this.state.cid]['name']}
                    <br/>
                    
                    <Button type="danger" onClick={this.click.bind(this)} ref="button" style={{display:this.state.style}}>关注作者</Button>
                    <Button style={{ display: this.state.style1 }} onClick={this.click1.bind(this)}>取消关注</Button>
                </h4>
                <p>
                    发布时间:{Store.getState().arr1[this.state.cid]['data']}
                </p>
                内容：
                <p>
                    {Store.getState().arr1[this.state.cid]['text']}
                    <br/>
                    <img src={Store.getState().arr1[this.state.cid]['img']} />
                </p>
                <Button ghost onClick={this.click2.bind(this)}>收藏文章</Button>
              {/* {console.log(Store.getState().arr1[this.state.cid])} */}
              
            </div>
        )
    }
}

export default Detail;