import { Layout, Menu } from 'antd';
import * as React from 'react';

const { Sider } = Layout;

class TableItemSideBar extends React.PureComponent<{}, any> {
  public render() {
    return (
      <Sider breakpoint="lg" collapsedWidth="0">
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <span className="nav-text">Adventurist Dev Table</span>
          </Menu.Item>
          <Menu.Item key="2">
            <span className="nav-text">Adventurist Dev Table</span>
          </Menu.Item>
          <Menu.Item key="3">
            <span className="nav-text">Adventurist Dev Table</span>
          </Menu.Item>
          <Menu.Item key="4">
            <span className="nav-text">Adventurist Dev Table</span>
          </Menu.Item>
          <Menu.Item key="5">
            <span className="nav-text">Adventurist Dev Table</span>
          </Menu.Item>
          <Menu.Item key="6">
            <span className="nav-text">Adventurist Dev Table</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default TableItemSideBar;
