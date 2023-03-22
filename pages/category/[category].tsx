import CategoryPageCard from '@/components/cards/productCards/CategoryPageCard';
import CategoryLayout from '@/components/layout/CategoryLayout';
import { ReactNode } from 'react';
import styles from './Category.module.scss';

const Category = () => {
  return (
    <>
      <div className={styles.category}>
        <div className={styles.cards} id="categoryPageProductCards">
          <CategoryPageCard
            name="xx99 mark ii headphones"
            image="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
            description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
            isNew={true}
          />
          <CategoryPageCard
            name="xx99 mark ii headphones"
            image="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
            description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
            isNew={true}
          />
          <CategoryPageCard
            name="xx99 mark ii headphones"
            image="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
            description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
            isNew={true}
          />
        </div>
      </div>
    </>
  );
};

Category.getLayout = function (page: ReactNode) {
  return <CategoryLayout>{page}</CategoryLayout>;
};

export default Category;
