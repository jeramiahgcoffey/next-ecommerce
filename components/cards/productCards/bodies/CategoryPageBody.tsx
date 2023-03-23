import Button from '@/components/inputs/button/Button';
import { useRouter } from 'next/router';
import styles from './CategoryPageBody.module.scss';

interface ICategoryPageBody {
  name: string;
  description: string;
  slug: string;
  isNew: boolean;
}

const CategoryPageBody = ({
  name,
  description,
  slug,
  isNew,
}: ICategoryPageBody) => {
  const router = useRouter();

  return (
    <div className={styles.body}>
      {isNew && (
        <div className={`overline ${styles.overline}`}>new product</div>
      )}
      <h4>{name}</h4>
      <p>{description}</p>
      <div className={styles.button}>
        <Button
          handleClick={() => {
            router.push(`/product/${slug}`);
          }}
        >
          see product
        </Button>
      </div>
    </div>
  );
};

export default CategoryPageBody;
