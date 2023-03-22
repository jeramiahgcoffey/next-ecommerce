import CategoryPageBody from './bodies/CategoryPageBody';
import ProductCard from './ProductCard';

interface ICategoryPageCardProps {
  name: string;
  image: string;
  description: string;
  isNew?: boolean;
}

const CategoryPageCard = ({
  name,
  image,
  description,
  isNew = false,
}: ICategoryPageCardProps) => {
  return (
    <ProductCard name={name} image={image}>
      <CategoryPageBody name={name} description={description} isNew={isNew} />
    </ProductCard>
  );
};

export default CategoryPageCard;
