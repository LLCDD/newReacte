import React, {Component} from 'react';
import { Layout, Menu, Breadcrumb, Icon,Button, Upload } from 'antd';
import {Link} from 'react-router-dom';
import $ from 'jquery';
// import { Button } from 'antd';
//import {Link} from 'react-router-dom';
import '../css/write.css';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
class Write extends Component {
	state = {
		collapsed:false,
		
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  
  h_clear(){
	
	this.refs.biaoti.value="";
	this.refs.connect.value="";


  }
  h_enter(){
	var h_title=this.refs.biaoti.value;
	var h_connect=this.refs.connect.value;
	console.log(h_title,h_connect);
	$.ajax({
		type:"get",
		url:"http://localhost:8000/write",
		data:{title:h_title,connect:h_connect},
		async:false,
		success:function(data){
			if(data=='success'){
				console.log("成功");
			 window.location.href="/home"
			}else{
				console.log("发表失败");
			}
			
		}
	})
  }
  
	render() {
		
			return (
			<div>
			<div className="h_wrap" >
					<Layout style={{ minHeight: '100vh' }}>
					<Sider
					  collapsible
					  collapsed={this.state.collapsed}
					  onCollapse={this.onCollapse}
					>
					  <div className="logo"  >
						<Link to='/home'>
							<button className="h_home">返回首页</button>
						</Link>
					</div>
					  <br/>
					  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
						<Menu.Item key="1" >
						  <Icon type="pie-chart" />
						  <span>创建文集</span>
						</Menu.Item>
						<Menu.Item key="2">
						  <Icon type="desktop" />
						  <span>日记本</span>
						</Menu.Item>
						<SubMenu
						  key="sub1"
						  title={<span><Icon type="user" /><span>管理</span></span>}
						>
						  <Menu.Item key="3">文章</Menu.Item>
						  <Menu.Item key="4">内容</Menu.Item>
						  <Menu.Item key="5">信息</Menu.Item>
						</SubMenu>
						
					  </Menu>
					</Sider>
					<Layout>
					  <Header style={{ background: '#ffff', padding: 0 }} ><h1>发 布 文 章</h1></Header>
					  <Content style={{ margin: '0 16px' }}>
						<Breadcrumb style={{ margin: '16px 0' ,background: '#fff'}}>
						  <Breadcrumb.Item >
							
						  </Breadcrumb.Item>
						  
						</Breadcrumb>
						{/*内容编写*/}
						<div style={{ padding: 14, background: '#fff', minHeight: 550 }}>
							<h4 className="h_tit1">标题</h4>
							<input type="text" className="h_title" placeholder="请输入标题" ref="biaoti" />
							<br/>
							<h4 className="h_tit2">文章内容</h4>
							<textarea className="h_connect" id="h_connect" ref="connect" placeholder="输入文章内容"></textarea>
							<br/>
							
							<div className="h_button">
							<Button type="danger" className="h_cl" onClick={this.h_clear.bind(this)}>清除</Button>
							{/* <Button type="dashed">Dashed</Button> */}
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<Button type="primary" className="h_btn" id="h_btn" onClick={this.h_enter.bind(this)}>发布</Button>
							</div>
							<Upload/>

						 
						</div>
					  </Content>
					  <Footer style={{ textAlign: 'center'}}>
					   版权归简书所有
					  </Footer>
					</Layout>
				  </Layout>
				</div>
			</div>
		);
	}
}


export default Write;
