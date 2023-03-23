import DetailPageBody from './bodies/DetailPageBody';
import ProductCard from './ProductCard';

interface IDetailPageCardProps {
  name: string;
  image: string;
  description: string;
  isNew?: boolean;
}

const DetailPageCard = ({
  name,
  image,
  description,
  isNew = false,
}: IDetailPageCardProps) => {
  return (
    <ProductCard name={name} image={image}>
      <DetailPageBody name={name} description={description} isNew={isNew} />
    </ProductCard>
  );
};

export default DetailPageCard;
