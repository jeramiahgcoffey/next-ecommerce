import Image from 'next/image';
import { ReactElement, ReactNode } from 'react';
import styles from './ProductCard.module.scss';

interface IProductCardProps {
  name: string;
  image: string;
  children: ReactElement | ReactNode;
}

const ProductCard = ({ name, image, children }: IProductCardProps) => {
  return (
    <>
      <div className={styles.productCard}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image className={styles.image} src={image} alt={name} fill />
          </div>
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
