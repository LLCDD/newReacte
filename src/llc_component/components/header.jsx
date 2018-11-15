import React from 'react'

import $ from 'jquery'
class Header extends React.Component {
    constructor(props){
        super(props)
    }
    focus(){
        $(".ldiv1").stop().animate({width:"260px"},600)
        $(".lspan").css({"background":"rgb(100, 100, 85)"})
    }
    blur(){
        $(".ldiv1").stop().animate({width:"200px"},600)
        $(".lspan").css({"background":"#cfcfcf"})
    }
    render(){
        return(
        <div>
            <header className="llc">
           
                <h1 className="llc1">简书</h1> 
                <h2 className="lh1">写文章</h2>
                <h2 className="lh1">注册</h2>
                <div className="ldiv">
                    <li className="llc2 ll1">&#xe69d;首页</li>
                    <li className="llc2">&#xe666;下载App</li>
                    <div className="ldiv1">
                        <input onFocus={this.focus.bind(this)} onBlur={this.blur.bind(this)} className="linput" type="text" placeholder="搜索" />
                        <span className="lspan">&#xe651;</span>
                    </div>
                    <h2 className="lh2">登陆</h2>
                </div>

            </header>
          </div>
        )
    }
}

export default Header