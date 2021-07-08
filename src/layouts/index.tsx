import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import styles from './index.less';

const { Header, Footer, Content } = Layout;

export interface UserLayoutProps {
  location?: any,
  a:1
}

const UserLayout: FC<UserLayoutProps> = (props) => {
  const { location: { pathname }, children } = props;
  const menu = [{ name: '英雄', path: '/' }, { name: '场内道具', path: '/users' }];
  return (
      <Layout>
        <Header>
          <div className={styles.logo}>资料库</div>
          <Menu theme='dark' defaultSelectedKeys={[pathname]} mode='horizontal'>
            {
              menu.map(({ name, path })=> <Menu.Item key={path}><Link to={path}>{name}</Link></Menu.Item>)
            }
          </Menu>
        </Header>
        <Content>{children}</Content>
        <Footer>Footer</Footer>
      </Layout>
  );
};

export default UserLayout;
