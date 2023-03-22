import styles from './ShopCardContainer.module.scss';
import ShopCard from '@/components/cards/shopCard/ShopCard';

const ShopCardContainer = () => {
  return (
    <div className={styles.container}>
      <ShopCard
        image="/assets/shared/desktop/image-category-thumbnail-headphones.png"
        name="Headphones"
      />
      <ShopCard
        image="/assets/shared/desktop/image-category-thumbnail-speakers.png"
        name="Speakers"
      />
      <ShopCard
        image="/assets/shared/desktop/image-category-thumbnail-earphones.png"
        name="Earphones"
      />
    </div>
  );
};

export default ShopCardContainer;
