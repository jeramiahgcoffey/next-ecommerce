import ShopCard from '@/components/cards/shopCard/ShopCard';
import styles from './ShopCardContainer.module.scss';

const ShopCardContainer = () => {
  return (
    <div className={styles.container}>
      <ShopCard
        image="/assets/shared/desktop/image-category-thumbnail-headphones.png"
        name="headphones"
      />
      <ShopCard
        image="/assets/shared/desktop/image-category-thumbnail-speakers.png"
        name="speakers"
      />
      <ShopCard
        image="/assets/shared/desktop/image-category-thumbnail-earphones.png"
        name="earphones"
      />
    </div>
  );
};

export default ShopCardContainer;
