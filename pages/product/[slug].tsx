import DetailPageCard from '@/components/cards/productCards/DetailPageCard';
import InTheBox from '@/components/containers/inTheBox/InTheBox';
import ProductFeatures from '@/components/containers/productFeatures/ProductFeatures';
import ProductGallery, {
  Gallery,
} from '@/components/containers/productGallery/ProductGallery';
import ProductSuggestions from '@/components/containers/productSuggestions/ProductSuggestions';
import ProductLayout from '@/components/layout/ProductLayout';
import { prisma } from '@/db/prismadb';
import useViewport from '@/hooks/useViewport';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './Product.module.scss';
import { Product as TProduct } from '@prisma/client';

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
  const router = useRouter();
  const { width } = useViewport();
  const [qty, setQty] = useState(1);

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
      <div onClick={() => router.back()} className={styles.back}>
        Go Back
      </div>

      <div className={styles.card}>
        <DetailPageCard
          name={product.name}
          image={product.image[getBreakpoint(width)].slice(1)}
          description={product.description}
          price={product.price}
          quantity={qty}
          setQuantity={setQty}
          addToCart={() => console.log('click')}
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

      <div className={styles.suggestions}>
        <ProductSuggestions products={product.others} />
      </div>
    </div>
  );
};

Product.getLayout = function (page: React.ReactNode) {
  return <ProductLayout>{page}</ProductLayout>;
};

export default Product;
