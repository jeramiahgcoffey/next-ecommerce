import Image from 'next/image';
import { ReactElement, ReactNode } from 'react';
import styles from './ProductCard.module.scss';

interface IProductCardProps {
  name: string;
  image: string;
  children: ReactElement | ReactNode;
  horizontalTablet?: boolean;
}

const ProductCard = ({
  name,
  image,
  children,
  horizontalTablet = false,
}: IProductCardProps) => {
  return (
    <div className={`${styles.productCard} productCard`}>
      <div
        className={`${styles.container} ${
          horizontalTablet && styles.horizontalTablet
        } productCardContainer`}
      >
        <div
          className={`${styles.imageContainer} ${
            horizontalTablet && styles.horizontalTablet
          }`}
        >
          <Image className={styles.image} src={image} alt={name} fill />
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default ProductCard;
