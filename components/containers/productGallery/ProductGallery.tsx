import useViewport from '@/hooks/useViewport';
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
  const { width } = useViewport();
  const getBreakpoint = (width: number) => {
    if (width >= 1000) {
      return 'desktop';
    } else if (width >= 600) {
      return 'tablet';
    } else {
      return 'mobile';
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <div className={styles.small}>
          <div className={styles.image}>
            <Image
              src={gallery.first[getBreakpoint(width)].slice(1)}
              fill
              alt={`${'Product'} image`}
            />
          </div>
          <div className={styles.image}>
            <Image
              src={gallery.second[getBreakpoint(width)].slice(1)}
              fill
              alt={`${'Product'} image`}
            />
          </div>
        </div>
        <div className={styles.large}>
          <Image
            src={gallery.third[getBreakpoint(width)].slice(1)}
            fill
            alt={`${'Product'} image`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
