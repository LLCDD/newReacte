import React from 'react';
import Store from '../../redux/Store';
import Action from '../../redux/Action';
import {BrowserRouter as Router,Route,Link,history} from 'react-router-dom';
import img5 from '../img/five.jpg';
import img1 from "../img/one.jpg";
import img2 from "../img/two.jpg";
class Shop extends React.Component {
	constructor(props){
		super(props)
		this.state={
			id1:Store.getState().id1,
			arr:Store.getState().arr1,
			att:{},
			count:1,
			add:Store.getState().Ladd,
			lunm:Store.getState().Larray,
			
		}
	}
	componentWillMount(){
//		if(localStorage.getItem('num') != null){
//          Store.dispatch(Action.Hy(JSON.parse(localStorage.getItem('num'))))
//		}
//		console.log(localStorage.getItem(Store.getState().obj1[this.state.id1]))
		
		//78console.log(Store.getState())
		//console.log(Store.getState().obj1[this.state.id1])
		
		
		this.setState({att:Store.getState().obj1[this.state.id1]})
		
		  
	}
	
	tap1(){
		// 保存  他的数组  然后循环数组
		var arr = this.state.lunm;
		
		var add = this.state.add;
		++add;
		// 保存的  add 
		Store.dispatch(Action.Ladd(add))
//		console.log(Store.getState().Ladd)
		var arrrr = Store.getState().Ladd
		Store.dispatch(Action.Lpush(arrrr))
		
		localStorage.setItem('num',JSON.stringify(this.state.lunm))
		
		localStorage.setItem('num' + this.state.add,JSON.stringify(this.state.att))
//		console.log(Store.getState())
//		alert("添加成功")
	}
	tap2(){
		this.props.history.push("./gouwu")
	}
	span1(){
		
		this.setState({count:this.state.count-1})
		console.log(this.state.att)
	}
	span2(){
		this.setState({count:this.state.count})
	}
	span3(){
		this.setState({count:this.state.count+1})
	}
	render(){
		
//		console.log()
		return(
			<div>
				<Router>
				<div>
					<div className="shop">
					
						<img src={img5} />
						<h2>{this.state.att.sm}</h2>
						<p>{this.state.att.p}</p>
						<p>作者{this.state.att.name}</p>
						<p>价格{this.state.att.jiage}</p>
						<div>
							<span onClick={this.span1.bind(this)}>-</span>
							<span onClick={this.span2.bind(this)}>{this.state.count}</span>
							<span onClick={this.span3.bind(this)}>+</span>
						</div>
						<button onClick={this.tap1.bind(this)}>加入购物车</button>
						<button onClick={this.tap2.bind(this)}>去购买</button>
						
				</div>
				<div className="ldiv1">
						<img src={img1}/>
						<img src={img2}/>
				</div>
			</div>
			</Router>
			</div>
		)
	}
}
export default Shop 