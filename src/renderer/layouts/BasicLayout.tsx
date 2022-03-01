import * as React from "react";
import BasicHeader from '../components/BasicHeader';
import Sidebar from './Sidebar';

import { Layout as ALayout } from 'antd';
const { Content, Footer } = ALayout;

export default class BasicLayout extends React.Component <{}> {
  render() {
    return (
      <React.Fragment>
        <ALayout className="basic-layout" style={{ height: "100vh", overflow: "auto" }}>
          <BasicHeader />
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
