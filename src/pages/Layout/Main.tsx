import React from "react";
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default () => {
  return (
    <Layout>
      <Sider theme="light">Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>footer</Footer>
      </Layout>
      <Sider theme="light">Sider</Sider>
    </Layout>
  )
};
