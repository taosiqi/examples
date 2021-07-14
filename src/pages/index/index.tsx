import styles from './index.less';
import {
  connect,
  Dispatch,
  IndexModelState,
  ConnectProps,
  useDispatch,
} from 'umi';
import React, { FC } from 'react';
interface PageProps extends ConnectProps {
  index: IndexModelState;
  dispatch: Dispatch;
}
const IndexPage: FC<PageProps> = (indexProps) => {
  let {
    index: { heros },
  } = indexProps;
  // console.log(indexProps);
  let dispatch = useDispatch();
  const onChange = () => {
    dispatch({
      type: 'index/save', // 如果在 model 外调用，需要添加 namespace
      payload: {
        heros: [],
      }, // 需要传递的信息
    });
  };
  return (
    <div>
      <div onClick={onChange}>清空</div>
      {heros.map((item) => {
        return (
          <span className={styles.title} key={item.ename}>
            {item.cname}
          </span>
        );
      })}
    </div>
  );
};

export default connect(({ index }: { index: IndexModelState }) => ({ index }))(
  IndexPage,
);
