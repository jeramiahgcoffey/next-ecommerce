import ShopCardContainer from '../containers/shopCardContainer/ShopCardContainer';
import About from './about/About';
import styles from './ProductLayout.module.scss';

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.children}>{children}</div>
      <div className={styles.container}>
        <ShopCardContainer />
      </div>
      <About />
    </>
  );
};

export default ProductLayout;
