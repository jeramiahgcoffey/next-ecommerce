import { useRouter } from 'next/router';
import { ReactElement, ReactNode } from 'react';
import About from './about/About';
import CategoryHeader from './categoryHeader/CategoryHeader';
import styles from './CategoryLayout.module.scss';

const CategoryLayout = ({
  children,
}: {
  children: ReactElement | ReactNode;
}) => {
  const router = useRouter();
  const category = Array.isArray(router.query?.category)
    ? router.query.category[0]
    : router.query?.category;

  return (
    <>
      <CategoryHeader name={category || ''} />
      <div className={styles.children}>{children}</div>
      <About />
    </>
  );
};

export default CategoryLayout;
