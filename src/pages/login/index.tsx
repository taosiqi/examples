import React, { FC } from 'react';
import style from './index.less';
import { connect, ItemModelState, ConnectProps, useHistory } from 'umi';
import { NavBar, Icon } from 'antd-mobile';
interface PageProps extends ConnectProps {
  item: ItemModelState;
}

const IndexPage: FC<PageProps> = ({ item, dispatch }) => {
  const { items = [], filterKey = 0 } = item;
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
        NavBar
      </NavBar>
      <div className={style.title}>title</div>
    </div>
  );
};

export default connect(({ item }: { item: ItemModelState }) => ({ item }))(
  IndexPage,
);
