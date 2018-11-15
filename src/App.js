import React, { Component } from 'react';
import {Redirect,Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import Action from './redux/Action';
import Store from './redux/Store';
// 头部
import Header from './llc_component/components/header'

// der from './components/header.jsx'
import './llc_component/css/llc1.css'
import './index.css'
import './llc_component/css/llc2.css'
import Header1 from './llc_component/components/header1.jsx'

import './llc_component/css/right.css'

import './llc_component/css/l-left.css'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isshow:false,
      arr:Store.getState()
    }
  }
  componentDidMount(){
    var len = this.state.arr.username.length;
    if(len > 0 ){
    // console.log(this.state.arr.username.length)
      this.setState({isshow:true})
      // console.log(this)
    }else{
      this.setState({isshow:false})
    }
  }
  render() {
    // console.log(this.state.isshow)
      if(this.state.isshow){
        return (
          <div>
            <Header1/>
            <div className="lright">
            </div>
          </div>
        );
      }else{
        return (
          <div>
            <Header/>

          </div>
        );
      }
      
      
    
  }
}

export default App;
