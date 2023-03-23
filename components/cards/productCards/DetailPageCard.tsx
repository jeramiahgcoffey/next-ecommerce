import DetailPageBody from './bodies/DetailPageBody';
import ProductCard from './ProductCard';

interface IDetailPageCardProps {
  name: string;
  image: string;
  description: string;
  isNew?: boolean;
  price: number;
  quantity: number;
  setQuantity: (qty: number) => void;
  addToCart: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DetailPageCard = ({
  name,
  image,
  description,
  price,
  quantity,
  setQuantity,
  addToCart,
  isNew = false,
}: IDetailPageCardProps) => {
  return (
    <ProductCard name={name} image={image} horizontalTablet>
      <DetailPageBody
        quantity={quantity}
        price={price}
        name={name}
        description={description}
        isNew={isNew}
        setQuantity={setQuantity}
        addToCart={addToCart}
      />
    </ProductCard>
  );
};

export default DetailPageCard;
