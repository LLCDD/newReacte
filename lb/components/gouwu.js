import React from "react";
import img3 from "../img/three.jpg";
import img5 from "../img/five.jpg";
import Store from '../../redux/Store';
import Action from '../../redux/Action';
import img21 from "../img/ww.jpg"
import $ from 'jquery'
import {BrowserRouter as Router,Route,Link,history} from 'react-router-dom';
class Gouwu extends React.Component{
    constructor(props){
        super(props)
        this.state={
        	arr0:[],
        	zj:0,
        	arrlb:"",
        	//  保存过来的数组
        	arr:[],
        	Bstyle:"none"
        	
        }
        this.onchange=this.onchange.bind(this)
    }
    onchange(){
		this.setState({arr:Store.getState()})
	}
	componentDidMount(){
		Store.subscribe(this.onchange)
	}
	shanchu(i){
		localStorage.removeItem("num"+i)
		console.log(this.state.arr)
		var arraY = this.state.arr;
		arraY.splice(i,1)
		this.setState({arr:arraY})
		
	}
	fk(){
		if(this.state.Bstyle == "none"){
			this.setState({Bstyle:"block"})
			$('html').css({opacity:0.4})
		}else{
			this.setState({Bstyle:"none"})
			$('html').css({opacity:1})
		}
	}
    render(){
 		var _this=this;
        return(
            <div>
               <img className="img1" src={img3}/>
              <ul className="ul21">
              		{
              			_this.state.arr.map((item,i)=>{
              				return(
              					<li key={i}>
              						<img src={img5}/>
              						<h3>{item.sm}</h3>
              						<p>{item.jiage}</p>
              						<button onClick={_this.shanchu.bind(_this,i)}>删除</button>
              					</li>
              				)
              			})
              		}
              		
              		<button className="fk" onClick={this.fk.bind(this)}>付款</button>
              </ul>
               
               <div className="div22" style={{ display:this.state.Bstyle }}>
               		<h2>扫码付款</h2>
               		<img src={img21}/>
               </div>
               		
               
            </div>
        )
    }
    
    componentWillMount(){
    	var arr1 = this.state.arr;
    	arr1 = JSON.parse(localStorage.getItem("num"));
    	var arr2 = Array.from(new Set(arr1)) 

		arr2.map((item,i)=>{

			console.log(JSON.parse(localStorage.getItem("num"+i)))
			let str=this.state.arr;
			str.push(JSON.parse(localStorage.getItem("num"+i)))
			
			this.setState({arr:str})
			
		})

		
	}
}
export default Gouwu;
        	