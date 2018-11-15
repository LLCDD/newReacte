import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import $ from "jquery";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Myhome extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          xinxi:[]
        }
    }
    componentWillMount(){
    var _this = this;
    // $.ajax({
    //     type:"get",
    //     async:false,
    //     url:"http://127.0.0.1:8000/guanzhu",
    //     success:function(data){
    //        console.log(data)
            
    //     }
    // })
  }

  oneClick(){
    var _this = this;
      $.ajax({
          type:"get",
          async:false,
          url:"http://127.0.0.1:8000/xinxi",
          success:function(data){
              _this.setState({xinxi:data})
              // console.log(data)
              
          }
      })
  }
    render(){
      console.log(this.state.xinxi)
        return(
            <div>
                 <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" title={<span><Icon type="user" />关注</span>}>
              <Menu.Item key="1" onClick={this.oneClick.bind(this)}>我关注的作者</Menu.Item>
              {/* <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item> */}
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="laptop" />收藏</span>}>
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="notification" />我们</span>}>
              <Menu.Item key="9">option9</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
         
                {this.state.xinxi.map((item,i)=>{
                    return(
                      <div key={i}>
                      <h3>关注的作者：{item.username}</h3>
                      <p><span style={{ color:"red" }}>关注的内容：</span><br/> {item.wz}
                        <hr/>
                      </p>
                      </div>
                    )
                })}
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>

            </div>
        )
    }
      
    
}
export default Myhome;