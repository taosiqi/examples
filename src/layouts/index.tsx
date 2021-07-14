import React, { FC } from 'react';
import { Link, Location, ConnectProps } from 'umi';
import styles from './index.less';
import { IRoute } from '@umijs/core';
import { Icon, NavBar } from 'antd-mobile';

export interface UserLayoutProps extends ConnectProps {
  routes: IRoute;
}

const UserLayout: FC<UserLayoutProps> = (props) => {
  const {
    location: { pathname },
    children,
    routes,
  } = props;
  return (
    <div>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >
        {document.title}
      </NavBar>
      {children}
    </div>
  );
};

export default UserLayout;
