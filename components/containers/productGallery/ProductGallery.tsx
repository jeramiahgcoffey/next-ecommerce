import Image from 'next/image';
import styles from './ProductGallery.module.scss';

export type Gallery = {
  mobile: string;
  tablet: string;
  desktop: string;
};

interface IProductGalleryProps {
  gallery: { first: Gallery; second: Gallery; third: Gallery };
}

const ProductGallery = ({ gallery }: IProductGalleryProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <div className={styles.small}>
          <div className={styles.image}>
            <Image
              src={gallery.first.mobile.slice(1)}
              fill
              alt={`${'Product'} image`}
            />
          </div>
          <div className={styles.image}>
            <Image
              src={gallery.second.mobile.slice(1)}
              fill
              alt={`${'Product'} image`}
            />
          </div>
        </div>
        <div className={styles.large}>
          <Image
            src={gallery.third.mobile.slice(1)}
            fill
            alt={`${'Product'} image`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
