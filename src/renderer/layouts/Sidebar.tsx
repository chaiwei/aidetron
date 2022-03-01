import * as React from "react";
import { Link } from "react-router-dom";

import { Layout, Menu } from 'antd';
const { SubMenu } = Menu;
const { Sider : ASider } = Layout;
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';

export default class Sidebar extends React.Component <{}> {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed : Boolean) => {
    this.setState({ collapsed });
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <ASider
        width={200} trigger={null} collapsible collapsed={collapsed} onCollapse={this.onCollapse}
        theme="light" className="site-layout-background"
        style={{
          overflowY: 'auto',
          overflowX: 'hidden',
          height: 'calc(100vh - 64px - 70px)',
          position: 'fixed',
          paddingBottom: '40px',
          left: 0,
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1"><Link to="/about">About</Link></Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <SubMenu key="sub1" title="subnav 1">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title="subnav 2">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title="subnav 3">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
        <div style={{ textAlign: 'center' }}>
          {
            React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              style: { color: 'black' },
              onClick: this.toggle,
            })
          }
        </div>
      </ASider>
    );
  }
}
