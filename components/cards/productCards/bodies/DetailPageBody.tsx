import Button from '@/components/inputs/button/Button';
import NumberField from '@/components/inputs/numberField/NumberField';
import styles from './DetailPageBody.module.scss';

interface IDetailPageBody {
  name: string;
  description: string;
  isNew: boolean;
  price: number;
  quantity: number;
  setQuantity: (qty: number) => void;
  addToCart: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DetailPageBody = ({
  name,
  description,
  isNew,
  price,
  quantity,
  setQuantity,
  addToCart,
}: IDetailPageBody) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className={styles.body}>
      {isNew && (
        <div className={`overline ${styles.overline}`}>new product</div>
      )}
      <h4>{name}</h4>
      <p>{description}</p>
      <div className={styles.price}>{formatter.format(price)}</div>
      <div className={styles.actions}>
        <NumberField
          value={quantity}
          handleChangeEvent={(e) =>
            setQuantity(Math.abs(parseInt(e.target.value)) || 1)
          }
          handleDecrement={() =>
            setQuantity(quantity - 1 > 0 ? quantity - 1 : 1)
          }
          handleIncrement={() => setQuantity(quantity + 1)}
        />
        <Button handleClick={addToCart}>Add to cart</Button>
      </div>
    </div>
  );
};

export default DetailPageBody;
