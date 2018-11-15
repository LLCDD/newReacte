import React from 'react'
import Store from '../../redux/Store'
import Action from '../../redux/Action'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import img4 from '../img/four.jpg';
import img10 from "../img/ten.jpg";
import img11 from "../img/qq.jpg";

class Detail extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			id:Store.getState().id,
			arr:Store.getState().arr,
			att:{}
		}
	}
	componentWillMount(){
		console.log(Store.getState())
		console.log(Store.getState().obj[this.state.id])
		this.setState({att:Store.getState().obj[this.state.id]})
	}
	render(){

		console.log(this.state.att)

		return(
			<div>
			<Router>
				<div className="xq">
					
					<img src={img4} />
					<h2>{this.state.att.name}<span>+关注</span></h2>
					<h3>介绍</h3>
					<p>{this.state.att.p}</p>
					<h3>文章</h3>
					<img src={img10}/>
					<img src={img11}/>
					
				</div>
			</Router>
			</div>
		)
	}

}

export default Detail
