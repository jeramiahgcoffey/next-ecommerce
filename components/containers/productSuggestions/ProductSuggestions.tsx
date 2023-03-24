import DenseProductCard from '@/components/cards/productCards/DenseProductCard';
import styles from './ProductSuggestions.module.scss';

interface IProductSuggestionsProps {
  products: {
    name: string;
    image: { mobile: string; tablet: string; desktop: string };
    slug: string;
  }[];
}

const ProductSuggestions = ({ products }: IProductSuggestionsProps) => {
  return (
    <div className={styles.container}>
      <h4>You may also like</h4>
      <div className={styles.suggestions}>
        {products.map((product) => (
          <DenseProductCard
            key={product.name}
            name={product.name}
            image={product.image.desktop.slice(1)}
            slug={product.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSuggestions;
