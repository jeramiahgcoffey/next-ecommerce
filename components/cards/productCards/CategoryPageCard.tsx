import CategoryPageBody from './bodies/CategoryPageBody';
import ProductCard from './ProductCard';

interface ICategoryPageCardProps {
  name: string;
  image: string;
  description: string;
  slug: string;
  isNew?: boolean;
}

const CategoryPageCard = ({
  name,
  image,
  description,
  slug,
  isNew = false,
}: ICategoryPageCardProps) => {
  return (
    <ProductCard name={name} image={image}>
      <CategoryPageBody
        name={name}
        description={description}
        isNew={isNew}
        slug={slug}
      />
    </ProductCard>
  );
};

export default CategoryPageCard;
