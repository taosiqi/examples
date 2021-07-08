
import { Input } from 'antd';
import styles from '@/pages/index/index.less';

export default function IndexPage() {
  const changeName = (name: string) => {
    console.log(name);
  };
  return (
    <>
      <h1 className={styles.title}>dashboard pages</h1>
    </>
  );
}
