import React from 'react'
import limg1 from '../img/140619114S5-1.jpg'
import limg2 from '../img/FLAMING MOUNTAIN.JPG'
import limg3 from '../img/thVGHNPC9U.jpg'
import img from '../img/1.jpg'
import limg4 from '../img/大鱼海棠桌面壁纸 - 1.jpg'
import limg5 from '../img/DXCHY}040)9[}}ZH2[}~4LP.jpg'
import limg6 from '../img/QQ图片20181113175554.png'
import $ from 'jquery'
import moke from 'mockjs'
// import Faxian from './l-faxian'
import Action from '../../redux/Action';
import Store from '../../redux/Store';
import {BrowserRouter as Router,Route,Link,history} from 'react-router-dom';
// import Detail from './l-detail'

import { Layout, Menu, Button,Carousel,BackTop} from 'antd';


// const { SubMenu } = Menu;
// const { Header, Content, Sider } = Layout;
function onChange(a, b, c) {
  console.log(a, b, c);
}
moke.mock("http://www.baidu.com",{
    "user|20":[
        {
            "id|+1":0,
            "name":"@cname",
            "bt":"@cparagraph(1)",
            "text":"@cparagraph(6)",
            "img":"@image",
            "data":"@date()"
        }
    ]
 })

class Left extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            arr:Store.getState(),
            ganzhu:Store.getState().arr1,  
            count:0    ,
            // scroll 的引用
            loading: false,
            hasMore: true,    
        }
        this.change = this.change.bind(this)
    }

    change(){
    //     Store.dispatch(Action.addarr(this.state.arr))
        this.setState({arr:Store.getState})
    }
   
    componentDidMount(){
        Store.subscribe(this.change)
    }
    move(){
        $(".ldiv5").stop().fadeIn(1000)
    }
    over(){
        $(".ldiv5").stop().fadeOut("slow")
    }
    loaction(i){

        this.props.history.push('./detail')
        // console.log(i)
        Store.dispatch(Action.cid(i))
    }
    button(){
        $.ajax({
            type:"get",
            async:false,
            url:"http://www.baidu.com",
            success:function(data){
                // console.log(JSON.parse(data).user)
                var push = JSON.parse(data).user;
                // console.log(push)
                push.map((item,i)=>{
                    console.log(item)
                    Store.dispatch(Action.addpush(item))
                })
                
            }
        })
        console.log(Store.getState())
    }

    // 自定的函数
    page(num){
        // 每页显示的个数
        var count1 = 4;
        // 一共显示多少页
        var num1 = Math.ceil(num.length/3);
        var pagen = num.length;
        if(this.state.count >= num1-2){
            this.setState({count:0})
        }
        for(var i = (this.state.count)*count1 ; i < (this.state.count+1)*count1 ; i++){
           return(
               <div className="ldiv10">
                   <li className="lli1">
                    <img src={num[i].pimg} />
                    <h3>{num[i].name}<span>+关注</span></h3>
                    <p>写了{num[i].count}k字 {num[i].count1}.喜欢</p>
                    </li>
                    <li className="lli1">
                    <img src={num[i].pimg} />
                    <h3>{num[i].name}<span>+关注</span></h3>
                    <p>写了{num[i].count}k字 {num[i].count1}.喜欢</p>
                    </li>
                    <li className="lli1">
                    <img src={num[i].pimg} />
                    <h3>{num[i].name}<span>+关注</span></h3>
                    <p>写了{num[i].count}k字 {num[i].count1}.喜欢</p>
                    </li>
               </div>
           )
        }
    }


    count(){
        this.setState({count:++this.state.count})
    }
   
    componentWillMount(){
        var _this = this;
        $.ajax({
            type:"get",
            url:"http://www.baidu.com",
            dataType:"json",
            async:false,
            success:function(data){ 
                Store.dispatch(Action.addarr(data.user)) 
            }
        }) 

        $.ajax({
            type:"get",
            url:"http://127.0.0.1:8000/guanzhu1",
            async:false,
            success:function(data){
               _this.setState({ganzhu:data})
               Store.dispatch(Action.addarr1(data))
            }
        })

    }
    render(){
       
        var array = this.state.arr.arr1
        
        var _this=this
        return(
            
            <div>
            <div style={{width:"50%",float:"left"}}>
                <Carousel autoplay={onChange}>
                    <div><img className="limg6" src={limg1}/></div>
                    <div><img className="limg6" src={limg2}/></div>
                    <div><img className="limg6" src={limg3}/></div>
                    <div><img className="limg6" src={limg4}/></div>
                </Carousel>
                
                <div className="ldiv7">
                    <a href="" className="a">
                    <img className="limg7" src="//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
                    <span className="lspan4">读书</span>
                    </a>
                    <a href="" className="a">
                    <img className="limg7" src="//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
                    <span className="lspan4">@IT·互联网</span>
                    </a>
                    <a href="" className="a">
                    <img className="limg7" src="//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
                    <span className="lspan4">摄影</span>
                    </a>
                    <a href="" className="a">
                    <img className="limg7" src="//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
                    <span className="lspan4">自然科学</span>
                    </a>
                    <a href="" className="a">
                    <img className="limg7" src="//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
                    <span className="lspan4">旅行·在路上</span>
                    </a>
                    <a href="" className="a">
                    <img className="limg7" src="//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
                    <span className="lspan4">摄影</span>
                    </a>
                </div>
                <div className="ldiv11">
                    {Store.getState().arr1.map((item,i)=>{
                        return(
                       
                           <div key={i} onClick={this.loaction.bind(this,i)}>
                           <Router>
                               
                               <div className="ldiv12">
                                   <Link to="./deta hyhil" className="Ll">
                                        <img src={limg3} alt=""/>
                               
                                         <h2><a className="la">{item.bt}</a></h2>
                                        <p>{item.text}</p>
                                    </Link>
                                    
                                </div>
                            </Router>   
                           </div>
                         
                        )
                    })}
                   <Button type="primary" block style={{ width:"80%",marginTop:"25px"
                    ,marginLeft:"10%" ,marginBottom:"20px"}} onClick={this.button.bind(this)}>阅读更多</Button>
                    <img src={limg6} />

                </div>
                
            
            </div>
            <div className="ldiv3" style={{width:"23%",float:"right"}}>       
            <li className="lli">七日活动 ></li>
            <li className="lli lli1">30日热门 ></li>
            <li className="lli lli2">优选连载 ></li>
            <li className="lli lli3">简书版权 ></li>
            <li className="lli lli4">简书大学堂 ></li>
            <div className="ldiv5">
                    <img className="limg1" src={img} alt=""/>
                    <div className="ldiv6"></div>
                </div>   
            <div className="ldiv4" onMouseMove={this.move.bind(this)} onMouseOut={this.over.bind(this)}>
                <img className="limg" src={img} />
                <span className="lspan1">下载简书手机App</span>
                <span className="lspan2">随时随地发现和创作内容</span>    
            </div>
            <div className="ldiv8">
            <img src={limg5} className="limg5"/>
            </div>
            <div className="ldiv9">
                <div>
                    <span className="cspan1">推荐作者</span>
                    <span className="cspan2" onClick={this.count.bind(this)}>
                     换一批
                    </span>
                    <br/>

                        {this.page(Store.getState().arr2)}
                        {/* {console.log(Store.getState().arr2)} */}

                </div>
            </div>
        </div>
        <div>
    <BackTop>
      <div className="ant-back-top-inner" style={{ background: '#1088e9',textAlign:"center",height:"40px",lineHeight:"40px"
        ,borderRadius:"5px"  }}>UP</div>
    </BackTop>
           
            <strong style={{ color: '#1088e9' }}>  </strong>
        </div>,
    </div>
        )
    }
}

export default Left