import { Icon, Layout, Menu } from 'antd';
import { CollapseType } from 'antd/lib/layout/Sider';
import * as React from 'react';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class IApp extends React.PureComponent {
  public onBreakPoint = (broken: boolean) => {
    console.log(broken);
  };

  public onCollapse = (collapsed: boolean, type: CollapseType) => {
    console.log(collapsed, type);
  };

  public render() {
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={this.onBreakPoint}
        onCollapse={this.onCollapse}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="plus" />
            <span className="nav-text">New Connection</span>
          </Menu.Item>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="heart" />
                <span>Favorites</span>
              </span>
            }
          />
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="redo" />
                <span>Recents</span>
              </span>
            }
          />
        </Menu>
      </Sider>
    );
  }
}
