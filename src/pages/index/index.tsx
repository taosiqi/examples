import React, { FC, useState } from 'react';
import styles from './index.less';
import myPage from '@/pages/index/my';
import homePage from '@/pages/index/home';
import releasePage from '@/pages/index/release';
import { connect, Dispatch, IndexModelState, ConnectProps } from 'umi';
import { TabBar, NavBar } from 'antd-mobile';

interface PageProps extends ConnectProps {
  index: IndexModelState;
  dispatch: Dispatch;
}
export interface stateProps {
  selectedTab?: String;
}
const IndexPage: FC<PageProps> = (indexProps) => {
  // let { home } = indexProps;
  const renderContent = (content: any) => {
    return (
      <div
        style={{
          backgroundColor: 'white',
          height: '100%',
          textAlign: 'center',
        }}
      >
        {content()}
      </div>
    );
  };
  const [state, setState] = useState<stateProps>({
    selectedTab: '首页',
  });
  const tabList = [
    {
      name: '首页',
      content: homePage,
    },
    {
      name: '发布',
      content: releasePage,
    },
    {
      name: '我的',
      content: myPage,
    },
  ];
  const changeState = (payload: stateProps) => {
    setState({
      ...state,
      ...payload,
    });
  };
  return (
    <>
      <NavBar mode="light" className={'nav-bar'}>
        {document.title}
      </NavBar>
      <div className={'tab-bar'}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          {tabList.map((item) => {
            return (
              <TabBar.Item
                title={item.name}
                key={item.name}
                icon={
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      background:
                        'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
                    }}
                  />
                }
                selectedIcon={
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      background:
                        'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
                    }}
                  />
                }
                selected={state.selectedTab === item.name}
                onPress={() => {
                  changeState({ selectedTab: item.name });
                }}
              >
                {renderContent(item.content)}
              </TabBar.Item>
            );
          })}
        </TabBar>
      </div>
    </>
  );
};

export default connect(({ index }: { index: IndexModelState }) => ({ index }))(
  IndexPage,
);
