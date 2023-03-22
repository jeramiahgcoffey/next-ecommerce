import MainLayout from '@/components/layout/MainLayout';
import { ReactNode } from 'react';
import styles from './Category.module.scss';

const Category = () => {
  return (
    <>
      <div className={styles.category}>hello world</div>
    </>
  );
};

Category.getLayout = function (page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

export default Category;
