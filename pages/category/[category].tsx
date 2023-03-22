import CategoryLayout from '@/components/layout/CategoryLayout';
import { ReactNode } from 'react';
import styles from './Category.module.scss';

const Category = () => {
  return (
    <>
      <div className={styles.category}></div>
    </>
  );
};

Category.getLayout = function (page: ReactNode) {
  return <CategoryLayout>{page}</CategoryLayout>;
};

export default Category;
