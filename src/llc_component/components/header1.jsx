import React from 'react'
import $ from 'jquery'
import {BrowserRouter as Router,NavLink,Route,history,Redirect,Switch} from 'react-router-dom'
// import Left from '../components/l-left'
import { Menu, Dropdown, Button } from 'antd'
import MyHome from './my-home'
import Left from './l-left'
import Gz from './l-guanzhu'
import Xx from './l-xiaoxi'
import Myhome from "./my-home";
import ShouC from './shoucan'
import Detail from './l-detail'
// import Left from './l-left'
const menu = (
    <Menu>
      <Menu.Item>
          <NavLink to="/myhome">我的主页</NavLink>
         
      </Menu.Item>
      <Menu.Item>
      <NavLink to="/shoucan">收藏的文章</NavLink>
      </Menu.Item>
      <Menu.Item>
        喜欢的文章
      </Menu.Item>
      <Menu.Item>
        已购内容
      </Menu.Item>
      <Menu.Item>
       我的钱包
      </Menu.Item>
      <Menu.Item>
       设置
      </Menu.Item>
      <Menu.Item>
       帮助和反馈
      </Menu.Item>
      <Menu.Item>
       退出
      </Menu.Item>
    </Menu>
  );
class Header1 extends React.Component {
    constructor(props){
        super(props)
    }
    focus(){
        $(".liv1").stop().animate({width:"260px"},600)
        $(".lspan").css({"background":"rgb(100, 100, 85)"})
    }
    blur(){
        $(".liv1").stop().animate({width:"200px"},600)
        $(".lspan").css({"background":"#cfcfcf"})
    }
    // faxian(){
    //     // console.log(e.targrt)
    //     window.location.href = "/faxian"
    // //    this.props.history.push('/faxian')
        
    // }
    // guanzhu(){
    //     window.location.href = "/guanzhu"
       
    // }
    // xiaoxi(){
    //     window.location.href = "/xiaoxi"
    // }
    click2(){
        console.log("2")
    }
    render(){
        return(
            <div>
            <Router>
                <div>
                <header className="lc">
            
                    <h1 className="lc1">简书</h1>
                    
                    <h2 className="l1">写文章</h2>
                    <div className="liv">
                    <NavLink to="/faxian" className="fax">&#xe606;发现</NavLink>
                    <NavLink to="/guanzhu"  className="guanz">&#xe608;关注</NavLink>
                    <NavLink to="/xiaoxi"  className="xiaox">&#xe615;消息</NavLink>
                        {/* <li className="lc2" onClick={this.faxian.bind(this)} ref="ipt">&#xe69d;发现</li> */}
                        {/* <li className="lc2" onClick={this.guanzhu.bind(this)}  ref="ipt1">&#xe666;关注</li>
                        <li className="lc2" onClick={this.xiaoxi.bind(this)}  ref="ipt2">&#xe666;消息</li> */}
                        <div className="liv1">
                            <input onFocus={this.focus.bind(this)} onBlur={this.blur.bind(this)} className="linput" type="text" placeholder="搜索" />
                            <span className="lspan">&#xe651;</span>
                        </div>
                        <Dropdown overlay={menu} placement="bottomCenter" >
                        <Button className="touxiang" >
                        </Button>
                        </Dropdown>
                    </div>
                </header>
                <section>
                    <Switch>
                    <Route path="/faxian" component={Left}></Route>
                    <Route path="/guanzhu" component={Gz}></Route>
                    <Route path="/xiaoxi" component={Xx}></Route>
                    <Route path="/detail" component={Detail}></Route>
                    <Route path="/myhome" component={Myhome}></Route>
                    <Route path="/shoucan" component={ShouC}></Route>
                    <Redirect to="/faxian" />
                    </Switch>
                </section>
                </div>
            </Router>
          </div>
        )
    }
}

export default Header1