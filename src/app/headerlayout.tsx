"use client"
import React, { FunctionComponent } from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

interface IHeaderProps {
  children: any
}

const { Header, Content } = Layout;

const HeaderLayout: FunctionComponent<IHeaderProps> = (props) => {
  const { children } = props
  return <Layout>
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className="demo-logo">
        Suffers
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items1}
        onClick={(e) => {
          console.log(e)
        }}
        style={{ flex: 1, minWidth: 0 }}
      />
    </Header>
    <Content style={{ padding: '0 48px' }}>
      {children}
    </Content>
  </Layout>;
};

export default HeaderLayout;
