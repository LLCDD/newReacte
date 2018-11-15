import React from 'react';
import Action from '../../redux/Action';
import Store from '../../redux/Store';
import { Input } from 'antd';
import wb from '../../img/wb.png' 
import wx from '../../img/wx.png'
import qq from '../../img/qq.png'
import db from '../../img/db.png'
import $ from 'jquery';
import '../css/login.css'
import {history} from 'react-router-dom'

export default class Demo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            arr:Store.getState()
        }
    }
    dl(){
        var username =this.refs.username.value;
        var password =this.refs.password.value;
        var _this=this
        $.ajax({
            type:"get",
            url:"http://localhost:8000/login",
            data:{username:username,password:password},
            async:false,
            success:function(data){
                console.log(data)
                if(data=="1"){
                    console.log(_this.refs.username.value)
                    console.log(_this.refs.password.value)
                    // Store.dispatch(Action.Login_username(_this.refs.username.value)) ;
                    // Store.dispatch(Action.Login_password(_this.refs.password.value));
                    // sessionStorage.setItem('username',_this.refs.username.value);
                    // window.location.href = '/'
                    console.log('登陆成功');
                    _this.props.history.push('/')

                }else{
                    console.log('密码不对');
                }
            }
        })
    }
    render(){
        return(
            <div>
                <h1>简书</h1>
                <div className="dt">
                    <span className="p1">登录</span>
                    <span className="p2">注册</span>
                    <input type="text" placeholder="手机号或邮箱" className="uw" ref="username"/>
                    <input type="password" placeholder="密码" className="pw" ref="password"/>
                    <span><input className="reb" type="checkbox" value=""/></span><span className="jz">记住我</span>
                    <span className="wt"><a href="https://www.jianshu.com/p/9058d0b8711d" target='_blank'>问题?</a></span>
                    <button onClick={this.dl.bind(this)}>登录</button>
                    <p>社交账号登录</p>
                    <span className="tb1"><a href="https://api.weibo.com/oauth2/authorize?client_id=1881139527&redirect_uri=http%3A%2F%2Fwww.jianshu.com%2Fusers%2Fauth%2Fweibo%2Fcallback&response_type=code&state=%257B%257D" target='_blank'><img src={wb}/></a></span>
                    <span className="tb2"><a href="https://open.weixin.qq.com/connect/qrconnect?appid=wxe9199d568fe57fdd&client_id=wxe9199d568fe57fdd&redirect_uri=http%3A%2F%2Fwww.jianshu.com%2Fusers%2Fauth%2Fwechat%2Fcallback&response_type=code&scope=snsapi_login&state=%257B%257D#wechat_redirect" target='_blank'><img src={wx}></img></a></span>
                    <span className="tb3"><a href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=100410602&redirect_uri=http%3A%2F%2Fwww.jianshu.com%2Fusers%2Fauth%2Fqq_connect%2Fcallback&response_type=code&state=%257B%257D" target='_blank'><img src={qq}/></a></span>
                    <span className="tb4"><a href="https://www.douban.com/service/auth2/auth?client_id=07b4f47aa74e2448171edd6ff5ea6cd8&redirect_uri=https%3A%2F%2Fwww.jianshu.com%2Fusers%2Fauth%2Fdouban%2Fcallback&response_type=code&state=%257B%257D" target='_blank'><img src={db}/></a></span>
                </div>
            </div>
        )
    }
}