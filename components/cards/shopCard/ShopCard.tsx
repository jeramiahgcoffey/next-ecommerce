import Image from 'next/image';
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
  return (
    <div className={styles.shopCard}>
      <Image
        className={styles.thumbnail}
        src={image}
        alt={`${name} thumbnail`}
        // fill
        width={150}
        height={140}
      />
      <h6 className={styles.name}>{name}</h6>
      <Button handleClick={handler} variant="flat">
        <div className={styles.buttonText}>
          <span>Shop</span>
          <RxCaretRight className={styles.icon} size={30} />
        </div>
      </Button>
    </div>
  );
};

export default ShopCard;
