import Button from '@/components/inputs/button/Button';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './DenseProductCard.module.scss';

interface IDenseProductCardProps {
  name: string;
  image: string;
  slug: string;
}

const DenseProductCard = ({ name, image, slug }: IDenseProductCardProps) => {
  const router = useRouter();

  return (
    <div className={`${styles.productCard}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.imageContainer}`}>
          <Image className={styles.image} src={image} alt={name} fill />
        </div>
        <div className={styles.body}>
          <h5 className={styles.name}>{name}</h5>
          <div className={styles.button}>
            <Button handleClick={() => router.push(`/product/${slug}`)}>
              See product
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DenseProductCard;
