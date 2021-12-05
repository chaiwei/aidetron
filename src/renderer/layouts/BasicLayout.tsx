import * as React from "react";
import Header from './Header';
import Sidebar from './Sidebar';

import { Layout as ALayout } from 'antd';
const { Header, Content, Footer } = ALayout;

export default class BasicLayout extends React.Component <{}> {
  render() {
    return (
      <React.Fragment>
        <ALayout style={{ height: "100vh", overflow: "auto" }}>
          <Header />
          <ALayout>
            <Sidebar />
            <ALayout style={{ padding: '0 24px 24px', marginLeft: 200 }}>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  background: '#f5f5f7'
                }}
              >
                {this.props.children}
              </Content>
            </ALayout>
          </ALayout>
          <Footer style={{ textAlign: 'center', background: 'red' }}>Ant Design @2021 Created by Ant UED</Footer>
        </ALayout>
      </React.Fragment>
    );
  }
}
