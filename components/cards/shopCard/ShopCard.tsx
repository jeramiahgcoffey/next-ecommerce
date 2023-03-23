import useViewport from '@/hooks/useViewport';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { RxCaretRight } from 'react-icons/rx';
import Button from '../../inputs/button/Button';
import styles from './ShopCard.module.scss';

interface IShopCardProps {
  image: string;
  name: string;
  handler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ShopCard = ({
  image,
  name,
  handler = (e) => {
    console.log('click');
  },
}: IShopCardProps) => {
  const { width } = useViewport();
  const router = useRouter();

  return (
    <div className={styles.shopCard}>
      <Image
        className={styles.thumbnail}
        src={image}
        alt={`${name} thumbnail`}
        // fill
        width={width > 1000 ? 225 : 150}
        height={width > 1000 ? 210 : 140}
      />
      <h6 className={styles.name}>{name}</h6>
      <Button
        handleClick={() => router.push(`/category/${name}`)}
        variant="flat"
      >
        <div className={styles.buttonText}>
          <span>Shop</span>
          <RxCaretRight className={styles.icon} size={30} />
        </div>
      </Button>
    </div>
  );
};

export default ShopCard;
