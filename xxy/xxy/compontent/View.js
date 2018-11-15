import React from 'react';
import Action from '../../redux/Action';
import Store from '../../redux/Store';
import { Input } from 'antd';
import wx from '../../img/wx.png';
import qq from '../../img/qq.png';
import $ from 'jquery';
import '../css/register.css';
import {NavLink,Switch,history} from 'react-router-dom'


export default class Demo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            arr:Store.getState()
            
        }
    }
    zc(){
        var username =this.refs.username.value;
        var password =this.refs.password.value;
        //console.log(uw)
        var _this = this;
        $.ajax({
            type:"get",
            url:"http://localhost:8000/register",
            data:{username:username,password:password},
            async:false,
            success:function(data){
                if(data==1){
                    console.log('注册成功');
                    _this.props.history.push('/login')
                }else{
                    console.log('注册失败');
                }
            }

        })
    }
    
    render(){
        
    

        return(
            <div>
                
                <h1>简书</h1>
                <div className="dl">
                    <span className="p3">登录</span>
                    <span className="p4">注册</span>
                    <input type="text" placeholder="你的昵称" className="uw" ref="username"/>
                    <input type="text" placeholder="设置你的密码" className="pw" ref="password"/>
                    <button onClick={this.zc.bind(this)}>注册</button>
                    <p className="bs">点击"注册"即表示您同意并愿意遵守简书</p>
                    <span className="xy"><a href="https://www.jianshu.com/p/c44d171298ce" target="_blank">用户协议</a></span>
                    <p className="he">和</p>
                    <span className="zc"><a href="https://www.jianshu.com/p/2ov8x3" target="_blank">隐私政策</a></span>
                    <p className="sj">社交账号登录</p>
                    <span className="tb7"><a href="https://open.weixin.qq.com/connect/qrconnect?appid=wxe9199d568fe57fdd&client_id=wxe9199d568fe57fdd&redirect_uri=http%3A%2F%2Fwww.jianshu.com%2Fusers%2Fauth%2Fwechat%2Fcallback&response_type=code&scope=snsapi_login&state=%257B%257D#wechat_redirect" target="_blank"><img src={wx}></img></a></span>
                    <span className="tb8"><a href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=100410602&redirect_uri=http%3A%2F%2Fwww.jianshu.com%2Fusers%2Fauth%2Fqq_connect%2Fcallback&response_type=code&state=%257B%257D" target="_blank"><img src={qq}/></a></span>
                </div>
            </div>
        )
    }
}