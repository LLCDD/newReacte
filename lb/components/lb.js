import React from 'react';
import $ from "jquery";
import Mock from "mockjs";
import {BrowserRouter as Router,Route,Link,history} from 'react-router-dom';

import img4 from '../img/four.jpg';
import img5 from '../img/five.jpg';
import img6 from '../img/six.jpg';
import img7 from '../img/seven.jpg';
import img8 from '../img/eight.jpg';
import img9 from '../img/nine.jpg';
import Action from '../../redux/Action';
import Store from '../../redux/Store';


var Random=Mock.Random;

Random.extend({
	sm:function(date){
		var constellations=["我把北方念给你听","三十六骑","后背留给我","骑着鹿穿越森林","时光回去，只愿未曾遇到你","失控的布局","别害怕，我们都孤寡","不要跟踪我","世界和它的悲欢"]
		return this.pick(constellations)
	}
})
Mock.mock("http://www.baidu.com/a",{
	"user|4":[
		{
			"id|+1":0,
			"name":"@cname",
			"p":"@cparagraph(4)",
			"ziji":"去作者主页"
			
		}
	]
})
Mock.mock("http://www.baidu1.com/a",{
	"user1|9":[
		{
			"id|+1":0,
			"name":"@cname",
			"p":"@cparagraph(2)",
			"jiage":"￥42.00",
			"sm":"@sm"
		
		}
	]
})


class Lb extends React.Component {
	constructor(props){
		super(props)
		this.state={
			arr:[],
			arr1:[],
			id:Store.getState().id,
			id1:Store.getState().id1
		}
		this.changes=this.changes.bind(this)
		this.changes1=this.changes1.bind(this)
	}
	changes1(){
		this.setState({id1:Store.getState()})
	}
	click(a){
		Store.dispatch(Action.id1(a)) 
		
		this.props.history.push("./shop")
		
	}
	
	changes(){
		this.setState({id:Store.getState()})
	}
	tap(a){
		Store.dispatch(Action.id(a)) 
		
		this.props.history.push('./detail')

	}
	
	render(){
			
		return(
			
			<div>
				<div id="nav">
					<span>&#xe61a;</span>
					<h1>简书版权</h1>
					<h2>独立作者平台</h2>
					<p><span className="span1">&#xe636;</span>如何出一本属于你自己的书</p>
				</div>
				<section>
					<div className="div1">
						<div className="div3">
							<ul className="ul1">
								<li>分类导航</li>
								<li>小说丶故事</li>
								<li>互联网丶科普</li>
								<li>职场丶励志丶理财</li>
								<li>文化丶历史</li>
								<li>工具丶技能</li>
								<li>电子书</li>
							</ul>
							<ul className="ul3">
							<h2>我想出书</h2>
							<li>
								<p>什么是简版出书</p>
								<p>借助[简版出书]出一本你自己的书</p>
								<span>查看详情 &gt;</span>
							</li>
							<li>
								<p>如何投稿</p>
								<p>投稿要求及方式</p>
								<span>查看详情 &gt;</span>
							</li>
						</ul>
						<ul className="ul4">
							<h2>关注我们</h2>
							<li>
								<p>&#xe61b; @简版出书</p>
								<span>官方微博</span>
							</li>
							<li>
								<p>&#xe61d; 简书出版</p>
								<span>简书官方账号</span>
								
							</li>
						</ul>
						<ul className="ul5">
							<h2>版权合作　&#xe621;</h2>
							<li>
								<p>图书出版丶影视改编丶
								版权采购等机构方合
								作,请邮件联系:<br/>
								<span>pup@jianshu.com</span>
								</p>
							</li>
						</ul>
						<ul className="ul6">
							<h2>设计规范</h2>
							<li>
								<p>对出版图书的设计建议</p>
								<span>查看详情 &gt;</span>
							</li>
						</ul>
						</div>
						
					<Router>	
						<div className="div2">
							
							<ul className="ul2">
								<h2>推荐作者</h2>
								{this.state.arr.map((item,i)=>{
									return(
										
										<li key={i} onClick={this.tap.bind(this,i)}>
										
											<img src={img4} />
											<h3>{item.name}</h3>
											
											<p>{item.p}</p>
											<span>{item.ziji}</span>
										</li>
									)
								})}
							</ul>
							
							<ul className="ul7">
								<h2>小说丶故事</h2>
								{
									this.state.arr1.map((item,i)=>{
										return(
											
											<li key={i} onClick={this.click.bind(this,i)}>
												<img src={img5} />
												<h3>{item.sm}</h3>
												<p>{item.name}</p>
												<p>{item.p}</p>
												<span>{item.jiage}</span>
											</li>
										)
									})
								}
							</ul>
							
						</div>
					</Router>	
					</div>
				</section>
				
				<footer>
					<ul className="ul8">
						<li><img src={img6} /></li>
						<li><img src={img7} /></li>
						<li><img src={img8} /></li>
						<li><img src={img9} /></li>
						
					</ul>
				</footer>
				
			</div>
		)
	}
	
	
	componentDidMount(){
		
		var _this=this;
		Store.subscribe(_this.changes)
		Store.subscribe(_this.changes1)	
			$.ajax({
				type:"get",
				url:"http://www.baidu.com/a",
				dataType:"json",
				anysc:"false",
				success:function(data){
				Store.dispatch(Action.obj(data.user))
				_this.setState({arr:data.user})
			
				}
			});
			
			$.ajax({
				type:"get",
				url:"http://www.baidu1.com/a",
				anysc:"false",
				dataType:"json",
				success:function(data){
					Store.dispatch(Action.obj1(data.user1))
				_this.setState({arr1:data.user1})
			
				}
			})
			
		}
}

export default Lb;