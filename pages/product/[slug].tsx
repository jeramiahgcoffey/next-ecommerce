import DetailPageCard from '@/components/cards/productCards/DetailPageCard';
import InTheBox from '@/components/containers/inTheBox/InTheBox';
import ProductFeatures from '@/components/containers/productFeatures/ProductFeatures';
import ProductGallery from '@/components/containers/productGallery/ProductGallery';
import ProductSuggestions from '@/components/containers/productSuggestions/ProductSuggestions';
import Back from '@/components/inputs/back/Back';
import ProductLayout from '@/components/layout/ProductLayout';
import { prisma } from '@/db/prismadb';
import useCart from '@/hooks/useCart';
import useViewport from '@/hooks/useViewport';
import styles from '@/styles/Product.module.scss';
import { Product as TProduct } from '@prisma/client';
import { GetServerSideProps } from 'next';
import { useRef, useState } from 'react';

interface IProductPageProps {
  product: TProduct;
}

export const getServerSideProps: GetServerSideProps<IProductPageProps> = async (
  context
) => {
  const productArr = await prisma.product.findMany({
    where: {
      slug: context.params?.slug as string,
    },
  });

  return {
    props: {
      product: productArr[0] || null,
    },
  };
};

const Product = ({ product }: IProductPageProps) => {
  const { width } = useViewport();
  const [qty, setQty] = useState(1);
  const { addProduct } = useCart();

  const suggestionsRef = useRef<HTMLDivElement>(null);

  const getBreakpoint = (width: number) => {
    if (width >= 1000) {
      return 'desktop';
    } else if (width >= 600) {
      return 'tablet';
    } else {
      return 'mobile';
    }
  };

  if (product === null) return null;
  return (
    <div className={styles.product}>
      <Back />

      <div className={styles.card}>
        <DetailPageCard
          name={product.name}
          image={product.image[getBreakpoint(width)].slice(1)}
          description={product.description}
          price={product.price}
          quantity={qty}
          setQuantity={setQty}
          addToCart={() => {
            addProduct(product, qty);
            setQty(1);
            suggestionsRef.current?.scrollIntoView();
          }}
        />
      </div>
      <div className={styles.details}>
        <div className={styles.features}>
          <ProductFeatures features={product.features} />
        </div>
        <div className={styles.includes}>
          <InTheBox items={product.includes} />
        </div>
      </div>

      <div className={styles.gallery}>
        <ProductGallery gallery={product.gallery} />
      </div>

      <div ref={suggestionsRef} className={styles.suggestions}>
        <ProductSuggestions products={product.others} />
      </div>
    </div>
  );
};

Product.getLayout = function (page: React.ReactNode) {
  return <ProductLayout>{page}</ProductLayout>;
};

export default Product;
