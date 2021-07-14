import styles from './index.less';
import { useSelector, useDispatch, useStore } from 'umi';
export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page 404</h1>
    </div>
  );
}
