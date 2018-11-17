import React, {Component} from 'react';
import '../css/money.css';
import img01 from '../../img/like-tx.jpg';
import Hwt from './hwt'
import {BrowserRouter as Router , Route , Link , Switch , withRouter} from 'react-router-dom';
class Money extends Component {
    constructor(props){
        super(props)
        this.state={
            money:9999,
        }

    }
    tap(){
		this.props.history.push('/hwt');
	};
	
	render() {
		
			return (
                <div className="lm-tag-wrap">
                <div className="lm-tag-header">
                     <div className="lm-tag-hli">
                         <img src={img01} alt="tx" />
                         <p clssName="lm-tag-p" id="lm-tag-p">
                             <span>KevinScript</span><br />
                             <span>未绑定手机(去绑定)</span>
                         </p>
                     </div>
                     <div className="lm-tag-hli">
                         <p className="lm-tag-hli-money">账户余额 {this.state.money}元</p>
                         <button>提现</button><span className="lm-tag-hli-span">*当前余额不足</span>
                     </div>
                     <Router>
                     <div className="lm-tag-hli">
                         <p>每次提现最小额度为￥100.00</p>
                         <p>提现会在 3-5 个工作日内到账</p>
                         <p>结算后的收益，提现不再收取手续费</p>
                         <Link to="/hwt">
                         <p onClick={this.tap.bind(this)}>收入结算与提现常见问题</p>
                         </Link>
                        
                     </div>
                     </Router>
                </div>
                
                
                
                <div id="lm-tag-hli-news">
                  <span>时间</span>
                  <span>类型</span>
                  <span>详情</span>
                  <span>金额</span>
                  <span>状态</span>
                </div>
             </div> 
         )
     }
 }

export default Money;
