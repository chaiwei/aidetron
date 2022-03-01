import * as React from "react";

import { Layout, Menu } from 'antd';
const { Header : AHeader } = Layout;
import classNames from 'classnames';
import './styles/header.less';

export default class BasicHeader extends React.Component <{}> {
  render() {
    console.log(window.Electron)
    let headerWrapperClass = {
      'basic-header': true,
      'basic-header-mac': true //(process.platform === 'darwin')
    };

    return (
      <AHeader className={classNames(headerWrapperClass)} style={{ WebkitAppRegion: 'drag' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2s</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </AHeader>
    );
  }
}
