import DetailPageCard from '@/components/cards/productCards/DetailPageCard';
import InTheBox from '@/components/containers/inTheBox/InTheBox';
import ProductFeatures from '@/components/containers/productFeatures/ProductFeatures';
import ProductGallery, {
  Gallery,
} from '@/components/containers/productGallery/ProductGallery';
import ProductLayout from '@/components/layout/ProductLayout';
import { prisma } from '@/db/prismadb';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './Product.module.scss';

type Product = {
  image: { mobile: string; tablet: string; desktop: string };
  name: string;
  new: boolean;
  description: string;
  features: string;
  includes: { item: string; quantity: number }[];
  gallery: { first: Gallery; second: Gallery; third: Gallery };
  price: number;
};

interface IProductPageProps {
  product: Product;
}

export const getServerSideProps: GetServerSideProps<{
  product: Product | null;
}> = async (context) => {
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
  const [qty, setQty] = useState(1);

  if (product === null) return null;
  return (
    <div className={styles.product}>
      <div onClick={() => router.back()} className={styles.back}>
        Go Back
      </div>

      <div className={styles.card}>
        <DetailPageCard
          name={product.name}
          image={product.image.mobile.slice(1)}
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
    </div>
  );
};

Product.getLayout = function (page: React.ReactNode) {
  return <ProductLayout>{page}</ProductLayout>;
};

export default Product;
